import { MetaItem } from 'types/meta'
import { StrapiFeature } from 'types/strapi'

export const outlineGenMeta: MetaItem = {
	title: 'The 100% free blog outline generator from Swiftbrief',
	description:
		"Swiftbrief's blog outline generator allows you to build your own outlines quickly and without the need to scour Google. No signup required.",
	thumbnailUrl: `${process.env.NEXT_PUBLIC_URL}/img/thumbnails/swiftbrief-home.png`,
	thumbnailAlt: 'swiftbrief free blog outline generator'
}

export const wipeoutMeta: MetaItem = {
	title: "We're sorry to see you go :( | Swiftbrief",
	description:
		"If you're seeing this page, it means you've deleted your Swiftbrief organization successfully. We're sorry you're leaving! But we understand.",
	noIndex: true
}

export const termsMeta: MetaItem = {
	title: 'Terms of service from Swiftbrief',
	description:
		"These are Swiftbrief's terms of service. Please read then carefully before using any of our online services. This is a legally-binding agreement.",
	thumbnailUrl: `${process.env.NEXT_PUBLIC_URL}/img/thumbnails/swiftbrief-terms.png`,
	thumbnailAlt: 'swiftbrief privacy policy'
}

export const privacyMeta: MetaItem = {
	title: 'Privacy policy from Swiftbrief',
	description:
		"This is Swiftbrief's privacy policy. Please read it carefully before submitting any of your information. We don't sell your data to third parties.",
	thumbnailUrl: `${process.env.NEXT_PUBLIC_URL}/img/thumbnails/swiftbrief-privacy.png`,
	thumbnailAlt: 'swiftbrief privacy policy'
}

export const resourcesMeta: MetaItem = {
	title: 'Blog posts, free tools, and other resources | Swiftbrief',
	description:
		'Check out all resources Swiftbrief has to offer: blog posts, free tools, and other powerful ways to learn about editorial content marketing.',
	thumbnailUrl: `${process.env.NEXT_PUBLIC_URL}/img/thumbnails/swiftbrief-home.png`,
	thumbnailAlt: 'swiftbrief brief generation for content marketers'
}

export const pricingMeta: MetaItem = {
	title: 'Just $29 / mo to generate high-quality briefs | Swiftbrief',
	description:
		'Swiftbrief starts at just $29 / mo. Join 100s of content marketers, generate high-quality briefs in no time, and deliver content ROI.',
	thumbnailUrl: `${process.env.NEXT_PUBLIC_URL}/img/thumbnails/swiftbrief-pricing.png`,
	thumbnailAlt: 'swiftbrief pricing'
}

export const signInMeta: MetaItem = {
	title: 'Sign in to Swiftbrief',
	description:
		'The login page for Swiftbrief. You can use magic links, email and password credentials, or sign in with your favorite service provider.',
	thumbnailUrl: `${process.env.NEXT_PUBLIC_URL}/img/thumbnails/swiftbrief-home.png`,
	thumbnailAlt: 'swiftbrief login signin page'
}

export const registerMeta: MetaItem = {
	title: 'Get a free 7-day trial | Swiftbrief',
	description:
		'Register to Swiftbrief and get a free 7-day trial. Choose the access method that you prefer and get started with your content briefs.',
	thumbnailUrl: `${process.env.NEXT_PUBLIC_URL}/img/thumbnails/swiftbrief-home.png`,
	thumbnailAlt: 'swiftbrief register sign up page'
}

export const homeMeta: MetaItem = {
	title: 'Swiftbrief: Create high-quality content briefs in 5 minutes',
	description:
		'Swiftbrief is the all-in-one brief generation tool that guides you through the process of creating high quality briefs for content writers.',
	thumbnailUrl: `${process.env.NEXT_PUBLIC_URL}/img/thumbnails/swiftbrief-home.png`,
	thumbnailAlt: 'swiftbrief brief generation for content marketers'
}

export const aboutMeta: MetaItem = {
	title: 'About Swiftbrief: The story behind the software',
	description:
		'Swiftbrief was born to solve a strong pain that the founder faced when creating content briefs at scale. Learn about the story behind the software here.'
}

export const notFoundMeta: MetaItem = {
	title: "This page doesn't exist | Swiftbrief",
	description: "Oops, you've landed on a ghost page."
}

export const briefGenMeta: MetaItem = {
	title: 'The 100% free content brief generator from Swiftbrief',
	description:
		"Swiftbrief's content brief generator allows you to generate a targeted brief for your content writer in less than 5 minutes. No signup required.",
	thumbnailUrl: `${process.env.NEXT_PUBLIC_URL}/img/thumbnails/swiftbrief-home.png`,
	thumbnailAlt: 'swiftbrief brief generation for content marketers'
}

export const contactMeta: MetaItem = {
	title: 'Contact Swiftbrief: Get in touch with the team',
	description:
		'Swiftbrief offers a variety of ways to contact the team. You can use the contact form, email address, or social media to get in touch.',
	thumbnailUrl: `${process.env.NEXT_PUBLIC_URL}/img/thumbnails/swiftbrief-home.png`,
	thumbnailAlt: 'swiftbrief contact information'
}

export const errorMeta: MetaItem = {
	title: 'Oops, something broke! | Swiftbrief',
	description:
		'It looks like something went wrong while you were navigating the Swiftbrief website. Please check the error description to learn more or contact support.',
	thumbnailUrl: `${process.env.NEXT_PUBLIC_URL}/img/thumbnails/swiftbrief-home.png`,
	thumbnailAlt: 'swiftbrief error page'
}

export const singleFeatureMeta = (feature: StrapiFeature) => {
	return {
		title: feature?.attributes?.title,
		description: feature?.attributes?.subHeading,
		thumbnailUrl: `${process.env.NEXT_PUBLIC_URL}/img/thumbnails/swiftbrief-home.png`,
		thumbnailAlt: 'swiftbrief brief generation for content marketers'
	}
}

export const featuresMeta: MetaItem = {
	title: 'Brief generation, outline builder & more features | Swiftbrief',
	description:
		'Check out all features Swiftbrief has to offer: brief generation, outline builder, topic clustering, brand guidelines & more.',
	thumbnailUrl: `${process.env.NEXT_PUBLIC_URL}/img/thumbnails/swiftbrief-home.png`,
	thumbnailAlt: 'swiftbrief brief generation for content marketers'
}
