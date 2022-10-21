import { Heading, Spacer, Text } from '@chakra-ui/react'
import { headerNavItems } from 'data/nav'
import { featuresMeta } from 'data/meta'
import { Fragment } from 'react'
import { NextPageWithLayout } from 'types/ui'
import { Meta, SimpleCta, DirectoryGrid } from 'ui/components'
import { getDirectoryWebsiteLayout } from 'ui/layouts'

const Features: NextPageWithLayout = () => {
	return (
		<Fragment>
			<Meta {...featuresMeta} />
			<Heading as='h1' fontSize={{ base: '2xl', md: '5xl' }} lineHeight='1.2'>
				All Swiftbrief features
			</Heading>
			<Text fontSize={{ base: 'md', md: '2xl' }} mt='4' maxW='xl'>
				Check out all Swiftbrief has to offer
			</Text>
			<DirectoryGrid items={headerNavItems[0].subNav} />
			<Spacer py='1em' />
			<SimpleCta
				title='Delegate content at scale'
				description='Swiftbrief makes it easy to create and manage all your content
									briefs in one place'
				ctaText='Get a free 7-day trial'
				ctaPerk='No credit card required'
				ctaLinkOrFx='/register'
			/>
		</Fragment>
	)
}

Features.getLayout = getDirectoryWebsiteLayout

export default Features
