import NextAuth from 'next-auth/next'
import EmailProvider from 'next-auth/providers/email'
import CredentialsProvider from 'next-auth/providers/credentials'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { prisma, stripe } from 'server/clients'
import { addDays } from 'server/utils'

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
		}
	},
	pages: {
		signOut: '/',
		error: '/error'
	},
	providers: [
		EmailProvider({
			name: 'magic link',
			server: process.env.EMAIL_SERVER,
			from: 'Swiftbrief <support@swiftbrief.com>',
			maxAge: 10 * 60
		}),
		CredentialsProvider({
			name: 'credentials',
			credentials: {
				username: {
					label: 'Username (email)',
					type: 'email',
					placeholder: 'Your email address...'
				},
				password: { label: 'Password', type: 'password' }
			},
			async authorize(credentials, req) {
				const user = { id: 1, name: 'J Smith', email: 'jsmith@example.com' }

				if (user) return user
				else return null
			}
		})
	]
})
