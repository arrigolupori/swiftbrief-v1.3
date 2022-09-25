import {
	BenefitItem,
	FaqItem,
	ImageItem,
	StatItem,
	TestimonialItem
} from 'types/ui'
import {
	AiOutlineCompass,
	AiOutlineAlignLeft,
	AiOutlineExport,
	AiOutlineUsergroupAdd,
	AiOutlineMail,
	AiOutlineLock,
	AiOutlineFieldTime,
	AiOutlineAudit,
	AiOutlineSmile
} from 'react-icons/ai'

export const userTestimonials: TestimonialItem[] = [
	{
		testimonial:
			'Swiftbrief does the work for you. It saves you time in researching topics and helps your create quality outlines in just minutes.',
		name: 'Ravindra Singh',
		jobTitle: 'Solution Consultant, Datavid',
		src: '/img/portraits/ravindra.jpeg'
	},
	{
		testimonial:
			'Swiftbrief sets a high bar for what content briefs can achieve in a limited space. No overcomplicating, just the info that I need.',
		name: 'Mike Arnold',
		jobTitle: 'Freelance writer',
		src: '/img/portraits/mike.png'
	}
]

export const customerTestimonials: TestimonialItem[] = [
	{
		testimonial:
			'We really love how Swiftbrief is set up, especially the topics, subtopics, and outline builder. The roadmap is also great!',
		name: 'Chris Tweten',
		jobTitle: 'CMO, SpacebarCollective',
		src: '/img/portraits/chris-tweten.jpeg'
	},
	{
		testimonial:
			'At my studio, we want to delegate more but we find the process tedious. Swiftbrief helps us choose a topic and be done in a few minutes.',
		name: 'Matteo Figoli',
		jobTitle: 'Advertising Consultant, MF Studio',
		src: '/img/portraits/matteo-figoli.jpeg'
	}
]

export const perks: BenefitItem[] = [
	{
		icon: AiOutlineCompass,
		title: 'Guided view',
		description:
			'Decide whether to be guided through the process or toggle more advanced workflows.'
	},
	{
		icon: AiOutlineAlignLeft,
		title: 'Outline builder',
		description:
			'Leverage a powerful outline builder to provide detailed instructions to writers.'
	},
	{
		icon: AiOutlineExport,
		title: 'Import and export (soon)',
		description:
			"We don't judge where your data goes (or comes from). Import and export at free will."
	},
	{
		icon: AiOutlineUsergroupAdd,
		title: 'Unlimited users',
		description:
			'Tired of per-user pricing? Swiftbrief lets you add as many users as you want.'
	},
	{
		icon: AiOutlineMail,
		title: 'Email support',
		description:
			'We reply to all support requests within 1 business day (usually in just a few hours).'
	},
	{
		icon: AiOutlineLock,
		title: '2-year pricelock',
		description:
			"Your plan's price will remain the same for 2 years even if we add more functionality."
	}
]

export const benefits: BenefitItem[] = [
	{
		icon: AiOutlineFieldTime,
		title: 'Generate briefs quickly',
		description:
			'Cut the time to generate high quality content briefs from 30 minutes to <5 minutes.'
	},
	{
		icon: AiOutlineAudit,
		title: 'Get consistent output',
		description:
			'No more inconsistent feedback. When writers know what to do, your brand benefits.'
	},
	{
		icon: AiOutlineSmile,
		title: 'Retain writers for longer',
		description:
			'Writers love structured briefs. A happier writer means a healthier relationship.'
	}
]

export const stats: StatItem[] = [
	{ number: 30, description: 'Minutes saved on each brief' },
	{ number: 90, description: '$ saved on research per article' },
	{ number: 6, description: 'Months of added writer retention' },
	{ number: 0, description: 'Headaches and time wasted' }
]

export const pricingFaqs: FaqItem[] = [
	{
		question: 'What does "Early Bird" mean?',
		answer:
			"The Early Bird program will last until December 31, 2022 and it's a way for you to actively engage in Swiftbrief's development early on, shaping its functionality. Plans are offered at a discounted price during this period, after which the full price will go into effect."
	},
	{
		question: 'What is a "lifetime" deal?',
		answer:
			'Lifetime deals are a time- and stock-limited offer that allows early adoperts of Swiftbrief to get full access for life, without the need to pay recurring fees or subscriptions. They are only available as part of our Early Bird program and will be discontinued in 2023.'
	},
	{
		question: 'What does "soon" mean?',
		answer:
			'Some of the features displayed on the pricing are not yet available. We display them to give you a sense of where Swiftbrief is headed, and whether an early investment in a Premium plan makes sense for you before the price increases after the Early Bird program expires.'
	},
	{
		question: 'What are briefs and brands?',
		answer:
			"Swiftbrief hinges on the idea that you create content to spread your brand's voice in a unique way. Brands in Swiftbrief allow writers to stay consistent against your tone of voice. Briefs are Swiftbrief's main unit of value: they represent a topic you want to create content around."
	},
	{
		question: 'What counts as a "topic search"?',
		answer:
			'A topic search automatically looks up relevant sub-topics derived from a root topic. For example, if you search for "content brief", Swiftbrief will let you select the sub-topics you like best from a varied list, so you can manage your entire content strategy from one place.'
	},
	{
		question: 'Which plan is best for me?',
		answer:
			'All plans include the core value of Swiftbrief: the ability to create high-quality content briefs that are easy to share and keep track of. If you need (or want) more advanced functionality for automated text generation (via GPT-3) and cost analysis, the higher plans are best.'
	}
]

export const logos: ImageItem[] = [
	{
		src: '/img/logos/spacebar-collective.png',
		alt: 'spacebar collective logo'
	},
	{ src: '/img/logos/mf-studio.png', alt: 'matteo figoli mf studio logo' },
	{ src: '/img/logos/datavid.png', alt: 'datavid logo' }
]
