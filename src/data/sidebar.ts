import {
	AiOutlineFileText,
	AiOutlineFileSearch,
	AiOutlineBook
} from 'react-icons/ai'
import { NavItem } from 'types/ui'

export const appNavItems: NavItem[] = [
	{
		title: 'Briefs',
		icon: AiOutlineFileText,
		href: '/app/briefs'
	},
	{
		title: 'Topics',
		icon: AiOutlineFileSearch,
		href: '/app/topics'
	},
	{ title: 'Brands', icon: AiOutlineBook, href: '/app/brands' }
	// {
	// 	title: 'Writers',
	// 	icon: AiOutlineFileWord,
	// 	href: '/app/writers'
	// }
]
