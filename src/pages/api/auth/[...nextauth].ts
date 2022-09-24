import NextAuth from 'next-auth/next'
import EmailProvider from 'next-auth/providers/email'
import GoogleProvider from 'next-auth/providers/google'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { prisma, stripe } from 'server/clients'
import { addDays } from 'server/utils'

import Handlebars from 'handlebars'
import { transporter } from 'server/clients'
import { readFileSync } from 'fs'
import path from 'path'

const emailsDir = path.resolve(process.cwd(), 'src/server/templates')

export default NextAuth({
	adapter: PrismaAdapter(prisma),
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
			const welcomeEmail = readFileSync(
				path.join(emailsDir, 'welcome-email.html'),
				{
					encoding: 'utf8'
				}
			)
			const emailTemplate = Handlebars.compile(welcomeEmail)
			await transporter.sendMail({
				from: 'Swiftbrief <support@swiftbrief.com>',
				to: user.email as string,
				subject: 'Welcome to Swiftbrief 🎉',
				html: emailTemplate({
					base_url: process.env.NEXTAUTH_URL,
					support_email: 'support@swiftbrief.com'
				})
			})
		}
	},
	pages: {
		signIn: '/signin',
		signOut: '/',
		error: '/error'
	},
	providers: [
		EmailProvider({
			name: 'magic link',
			server: process.env.EMAIL_SERVER,
			from: 'Swiftbrief <support@swiftbrief.com>',
			maxAge: 10 * 60,
			sendVerificationRequest: ({ identifier, url }) => {
				const verificationEmail = readFileSync(
					path.join(emailsDir, 'confirm-email.html'),
					{
						encoding: 'utf8'
					}
				)
				const emailTemplate = Handlebars.compile(verificationEmail)
				transporter.sendMail({
					from: `Swiftbrief <support@swiftbrief.com>`,
					to: identifier,
					subject: 'Your magic link for Swiftbrief',
					html: emailTemplate({
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
		})
	]
})
