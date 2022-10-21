import { ImageExtension } from 'types/unions'

export type MetaItem = {
	title: string
	description?: string
	thumbnailUrl?: `${string}.${ImageExtension}`
	thumbnailAlt?: string
	noIndex?: boolean
}
