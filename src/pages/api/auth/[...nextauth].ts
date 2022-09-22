import NextAuth from 'next-auth/next'
import EmailProvider from 'next-auth/providers/email'
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
			from: 'Swiftbrief <support@swiftbrief.com>'
		})
	]
})
