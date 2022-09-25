import { ReactElement, ReactNode } from 'react'
import { IconType } from 'react-icons/lib'
import { NextPage } from 'next'
import { ImageExtension } from './unions'

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
	href: `/${string}` | `https://${string}`
	icon?: IconType
}

export interface SubNavItem extends NavItem {
	buttonText: string
}

export interface HeaderNavItem extends NavItem {
	popover: boolean
	subNav: SubNavItem[]
	hideOnTablet: boolean
}

export type LayoutProps = {
	children: ReactNode
}

export type TestimonialItem = {
	testimonial: string
	name: string
	jobTitle: string
	src: `/${string}.${ImageExtension}`
}

export type BenefitItem = {
	icon: IconType
	title: string
	description: string
}

export type FaqItem = {
	question: string
	answer: string
}

export type StatItem = {
	number: number
	description: string
}

export type ImageItem = {
	src: `/${string}.${ImageExtension}`
	alt: string
}