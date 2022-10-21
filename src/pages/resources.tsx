import { Heading, Spacer, Text } from '@chakra-ui/react'
import { headerNavItems } from 'data/nav'
import { resourcesMeta } from 'data/meta'
import { Fragment } from 'react'
import { NextPageWithLayout } from 'types/ui'
import { Meta, SimpleCta, DirectoryGrid } from 'ui/components'
import { getDirectoryWebsiteLayout } from 'ui/layouts'

const Resources: NextPageWithLayout = () => {
	return (
		<Fragment>
			<Meta {...resourcesMeta} />
			<Heading as='h1' fontSize={{ base: '2xl', md: '5xl' }} lineHeight='1.2'>
				All Swiftbrief resources
			</Heading>
			<Text fontSize={{ base: 'md', md: '2xl' }} mt='4' maxW='xl'>
				Check out Swiftbrief&apos;s free resources
			</Text>
			<DirectoryGrid items={headerNavItems[2].subNav} />
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

Resources.getLayout = getDirectoryWebsiteLayout

export default Resources
