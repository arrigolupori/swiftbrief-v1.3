import { ReactElement, ReactNode } from 'react'
import { IconType } from 'react-icons/lib'
import { NextPage } from 'next'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
	getLayout?: (page: ReactElement) => ReactNode
}

export type FooterColumn = {
	title: string
	links: NavItem[]
}

export type NavItem = {
	title: string
	description?: string
	href: `/${string}`
	icon?: IconType
}

export interface SubNavItem extends NavItem {
	buttonText: string
}

export interface HeaderNavItem extends NavItem {
	popover: boolean
	subNav: SubNavItem[]
}

export type LayoutProps = {
	children: ReactNode
}