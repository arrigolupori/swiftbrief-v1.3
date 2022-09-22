import NextAuth from 'next-auth/next'
import EmailProvider from 'next-auth/providers/email'
import CredentialsProvider from 'next-auth/providers/credentials'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { prisma } from 'server/clients'

export default NextAuth({
	adapter: PrismaAdapter(prisma),
	pages: {
		signIn: '/signin',
		signOut: '/signin'
	},
	providers: [
		EmailProvider({
			server: process.env.EMAIL_SERVER,
			from: 'Swiftbrief <support@swiftbrief.com>',
			maxAge: 10 * 60
		}),
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				username: {
					label: 'Email (username)',
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
