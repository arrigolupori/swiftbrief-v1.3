import { Heading, Spacer, Text } from '@chakra-ui/react'
import { toolsNavItems } from 'data/nav'
import { toolsMeta } from 'data/meta'
import { Fragment } from 'react'
import { NextPageWithLayout } from 'types/ui'
import { Meta, SimpleCta, DirectoryGrid } from 'ui/components'
import { getDirectoryWebsiteLayout } from 'ui/layouts'

const Tools: NextPageWithLayout = () => {
	return (
		<Fragment>
			<Meta {...toolsMeta} />
			<Heading as='h1' fontSize={{ base: '2xl', md: '5xl' }} lineHeight='1.2'>
				Swiftbrief&apos;s free tools
			</Heading>
			<Text fontSize={{ base: 'md', md: '2xl' }} mt='4' maxW='xl'>
				Completely free to use. No signup required.
			</Text>
			<DirectoryGrid items={toolsNavItems} />
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

Tools.getLayout = getDirectoryWebsiteLayout

export default Tools
