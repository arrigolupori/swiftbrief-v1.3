import { Heading, Text, useColorModeValue } from '@chakra-ui/react'
import { headerNavItems } from 'data/header'
import { resourcesMeta } from 'data/meta'
import { Fragment } from 'react'
import { NextPageWithLayout } from 'types/ui'
import { Meta, TrialCta, DirectoryGrid } from 'ui/components'
import { getDirectoryWebsiteLayout } from 'ui/layouts'

const Resources: NextPageWithLayout = () => {
	const blackToBlue = useColorModeValue('primary.500', 'secondary.500')
	return (
		<Fragment>
			<Meta {...resourcesMeta} />
			<Heading
				as='h1'
				fontSize={{ base: '2xl', md: '5xl' }}
				lineHeight='1.2'
				color={blackToBlue}
			>
				All Swiftbrief resources
			</Heading>
			<Text fontSize={{ base: 'md', md: '2xl' }} mt='4' maxW='xl'>
				Check out Swiftbrief&apos;s free resources
			</Text>
			<DirectoryGrid items={headerNavItems[2].subNav} />
			<TrialCta />
		</Fragment>
	)
}

Resources.getLayout = getDirectoryWebsiteLayout

export default Resources
