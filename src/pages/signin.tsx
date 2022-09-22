import { Heading } from '@chakra-ui/react'
import { signInMeta } from 'data/meta'
import { Meta } from 'ui/components'
import type { NextPage } from 'next'
import { Fragment } from 'react'

const Signin: NextPage = () => {
	return (
		<Fragment>
			<Meta {...signInMeta} />
			<Heading>Signin</Heading>
		</Fragment>
	)
}

export default Signin
