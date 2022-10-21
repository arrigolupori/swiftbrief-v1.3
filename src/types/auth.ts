import { Role } from '@prisma/client'

export interface AuthInstance {
	authSession: AuthSession
}

export type AuthSession = {
	user: AuthUser
	expires: Date
}

export type AuthUser = {
	name?: string
	email: string
	role: Role
}
