export type StrapiLog = {
	id: number
	attributes: StrapiLogAttributes
}

export type StrapiLogAttributes = {
	title: string
	body: string
	createdAt: Date
	updatedAt: Date
	publishedAt: Date
	date: Date
}

export type StrapiFeature = {
	id: number
	attributes: StrapiFeatureAttributes
}

export type StrapiFeatureAttributes = {
	label: string
	slug: string
	title: string
	heading: string
	subHeading: string
	videoId: string
	createdAt: Date
	updatedAt: Date
	publishedAt: Date
	showcase: boolean
	status: string
	description: string
}
