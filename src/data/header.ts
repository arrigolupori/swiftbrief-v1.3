import { HeaderNavItem } from 'types/ui'
import {
	AiOutlineStar,
	AiOutlineFileText,
	AiOutlineAlignLeft,
	AiOutlineFileSearch,
	AiOutlineBook,
	AiOutlineRead,
	AiOutlinePicLeft,
	AiOutlineTool,
	AiOutlineDollarCircle
} from 'react-icons/ai'

import { NavItem } from 'types/ui'

export const mobileNavItems: NavItem[] = [
	{
		title: 'Features',
		description:
			'Explore all Swiftbrief functionality directly from our feature gallery.',
		href: '/features',
		icon: AiOutlineStar
	},
	{
		title: 'Pricing',
		description:
			'Start creating your first content briefs with our simple monthly pricing.',
		href: '/pricing',
		icon: AiOutlineDollarCircle
	},
	{
		title: 'Resources',
		description:
			"Leverage Swiftbrief's educational resources and free content tools.",
		href: '/resources',
		icon: AiOutlineRead
	}
]

export const headerNavItems: HeaderNavItem[] = [
	{
		popover: true,
		title: 'Features',
		description:
			'Explore all Swiftbrief functionality directly from our feature gallery',
		href: '/features',
		icon: AiOutlineStar,
		hideOnTablet: false,
		subNav: [
			{
				title: 'Brief generation',
				description:
					'Create high-quality briefs, keep track of progress, and easily share them.',
				href: '/features/brief-generation',
				icon: AiOutlineFileText,
				buttonText: 'How briefs work'
			},
			{
				title: 'Outline builder',
				description:
					'Build powerful content outlines directly within your briefs.',
				href: '/features/outline-builder',
				icon: AiOutlineAlignLeft,
				buttonText: 'How outlines work'
			},
			{
				title: 'Topic clustering',
				description:
					'Add root topics and get suggestions to create your own topic clusters.',
				href: '/features/topic-clustering',
				icon: AiOutlineFileSearch,
				buttonText: 'How topics work'
			},
			{
				title: 'Brand guidelines',
				description:
					'Enforce brand consistency across multiple pieces in just a few steps.',
				href: '/features/brand-guidelines',
				icon: AiOutlineBook,
				buttonText: 'How brands work'
			}
		]
	},
	{
		popover: false,
		title: 'Pricing',
		description: '',
		href: '/pricing',
		hideOnTablet: false,
		subNav: []
	},
	{
		popover: true,
		title: 'Resources',
		description:
			"Leverage Swiftbrief's educational resources and free content tools",
		href: '/resources',
		icon: AiOutlineRead,
		hideOnTablet: true,
		subNav: [
			{
				title: 'Blog posts',
				description:
					'Learn about the world of editorial content strategy and win traffic.',
				href: '/blog',
				icon: AiOutlinePicLeft,
				buttonText: 'Read the blog'
			},
			{
				title: 'Free tools',
				description:
					"Get a sense of Swiftbrief's power with our tools. No signup required.",
				href: '/tools',
				icon: AiOutlineTool,
				buttonText: 'Try our free tools'
			}
		]
	}
]
