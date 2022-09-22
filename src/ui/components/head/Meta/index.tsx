import { MetaItem } from 'types/meta'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import { FC } from 'react'

export const Meta: FC<MetaItem> = (props) => {
	const { asPath } = useRouter()
	return (
		<NextSeo
			title={props.title}
			description={props.description}
			noindex={props.noIndex ? true : false}
			canonical={`https://www.swiftbrief.com${asPath}`}
			openGraph={{
				url: `https://www.swiftbrief.com${asPath}`,
				title: props.title,
				images: [
					{
						url: `${props.thumbnailUrl}`,
						width: 1024,
						height: 512,
						alt: props.thumbnailAlt
					}
				],
				site_name: 'Swiftbrief'
			}}
			twitter={{
				cardType: 'summary_large_image'
			}}
		/>
	)
}
