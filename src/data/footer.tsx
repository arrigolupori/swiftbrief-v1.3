import { AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai'
import { FooterColumn } from 'types/ui'

export const socialLinks = [
	{
		url: 'https://twitter.com/swiftbriefapp',
		icon: <AiFillTwitterCircle size='30' />
	},
	{
		url: 'https://www.linkedin.com/company/swiftbriefapp',
		icon: <AiFillLinkedin size='30' />
	}
]

export const footerColumns: FooterColumn[] = [
	{
		title: 'Company',
		links: [
			{ anchor: 'Roadmap', slug: '/roadmap' },
			{
				anchor: 'About',
				slug: '/about'
			}
		]
	},
	{
		title: 'Product',
		links: [
			{
				anchor: 'Support docs',
				slug: '/docs'
			},
			{
				anchor: 'Bug tracker',
				slug: '/bugs'
			},
			{
				anchor: 'Changelog',
				slug: '/changelog'
			}
		]
	},
	{
		title: 'Free tools',
		links: [
			{
				anchor: 'Outline generator',
				slug: '/tools/blog-outline-generator'
			},
			{
				anchor: 'Brief generator',
				slug: '/tools/content-brief-generator'
			}
		]
	},
	{
		title: 'Legal',
		links: [
			{
				anchor: 'Terms of service',
				slug: '/terms'
			},
			{
				anchor: 'Privacy policy',
				slug: '/privacy'
			}
		]
	}
]
