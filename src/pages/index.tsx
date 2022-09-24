import { Heading } from '@chakra-ui/react'
import { homeMeta } from 'data/meta'
import { Fragment } from 'react'
import { NextPageWithLayout } from 'types/ui'
import { Meta } from 'ui/components'
import { getMainWebsiteLayout } from 'ui/layouts/website'

const Home: NextPageWithLayout = () => {
	return (
		<Fragment>
			<Meta {...homeMeta} />
			<Heading>Hello world</Heading>
		</Fragment>
	)
}

Home.getLayout = getMainWebsiteLayout

export default Home
