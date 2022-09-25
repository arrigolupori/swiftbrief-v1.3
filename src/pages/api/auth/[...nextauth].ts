import NextAuth from 'next-auth/next'
import EmailProvider from 'next-auth/providers/email'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { prisma, stripe, transporter } from 'server/clients'
import { addDays, emailSetup } from 'server/utils'

export default NextAuth({
	adapter: PrismaAdapter(prisma),
	pages: {
		signIn: '/signin',
		signOut: '/',
		error: '/error'
	},
	callbacks: {
		session: async ({ session, user }) => {
			// @ts-ignore
			session.user.role = user.role
			return Promise.resolve(session)
		}
	},
	events: {
		createUser: async ({ user }) => {
			await stripe.customers
				.create({ email: user.email as string | undefined })
				.then(async (customer) => {
					return prisma.organization.create({
						data: {
							users: { connect: [{ id: user.id }] },
							customerId: customer.id,
							periodEnd: addDays(new Date(), 7)
						}
					})
				})
			const welcomeEmail = emailSetup('welcome-email.html')
			await transporter.sendMail({
				from: 'Swiftbrief <support@swiftbrief.com>',
				to: user.email as string,
				subject: 'Welcome to Swiftbrief 🎉',
				html: welcomeEmail({
					base_url: process.env.NEXTAUTH_URL,
					support_email: 'support@swiftbrief.com'
				})
			})
		}
	},
	providers: [
		EmailProvider({
			name: 'magic link',
			server: process.env.EMAIL_SERVER,
			from: 'Swiftbrief <support@swiftbrief.com>',
			maxAge: 10 * 60,
			sendVerificationRequest: ({ identifier, url }) => {
				const verificationEmail = emailSetup('confirm-email.html')
				transporter.sendMail({
					from: `Swiftbrief <support@swiftbrief.com>`,
					to: identifier,
					subject: 'Your magic link for Swiftbrief',
					html: verificationEmail({
						base_url: process.env.NEXTAUTH_URL,
						signin_url: url,
						email: identifier
					})
				})
			}
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
		}),
		CredentialsProvider({
			name: 'credentials',
			credentials: {
				email: {
					label: 'Email',
					type: 'email',
					placeholder: 'Enter your email...'
				},
				password: { label: 'Password', type: 'password' }
			},
			authorize: (credentials) => {
				if (
					credentials?.email === 'arrigo@swiftbrief.com' &&
					credentials?.password === '12345678'
				)
					return {
						id: 1,
						name: 'Arrigo',
						email: 'arrigo@swiftbrief.com'
					}
				return null
			}
		})
	]
})
