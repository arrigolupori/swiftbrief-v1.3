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
			{ title: 'Roadmap', href: '/roadmap' },
			{
				title: 'About',
				href: '/about'
			}
		]
	},
	{
		title: 'Product',
		links: [
			{
				title: 'Support docs',
				href: '/docs'
			},
			{
				title: 'Bug tracker',
				href: '/bugs'
			},
			{
				title: 'Changelog',
				href: '/changelog'
			}
		]
	},
	{
		title: 'Free tools',
		links: [
			{
				title: 'Outline generator',
				href: '/tools/blog-outline-generator'
			},
			{
				title: 'Brief generator',
				href: '/tools/content-brief-generator'
			}
		]
	},
	{
		title: 'Legal',
		links: [
			{
				title: 'Terms of service',
				href: '/terms'
			},
			{
				title: 'Privacy policy',
				href: '/privacy'
			}
		]
	}
]
