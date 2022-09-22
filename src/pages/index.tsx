import { Heading } from '@chakra-ui/react'
import { homeMeta } from 'data/meta'
import type { NextPage } from 'next'
import { Fragment } from 'react'
import { Meta } from 'ui/components'

const Home: NextPage = () => {
	return (
		<Fragment>
			<Meta {...homeMeta} />
			<Heading>Hello world</Heading>
		</Fragment>
	)
}

export default Home
