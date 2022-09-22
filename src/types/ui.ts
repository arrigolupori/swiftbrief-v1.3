import { ReactElement, ReactNode } from 'react'
import { NextPage } from 'next'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
	getLayout?: (page: ReactElement) => ReactNode
}

export type FooterColumn = {
	title: string
	links: FooterNavItem[]
}

export type FooterNavItem = {
	anchor: string
	slug: `/${string}`
}
