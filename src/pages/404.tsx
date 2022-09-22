import { Fragment } from 'react'
import Link from 'next/link'
import { Text } from '@chakra-ui/react'
import { Meta } from 'ui/components'
import { notFoundMeta } from 'data/meta'
import { NextPageWithLayout } from 'types/ui'
import { getCenteredWebsiteLayout } from 'ui/layouts'

const NotFound: NextPageWithLayout = () => {
	return (
		<Fragment>
			<Meta {...notFoundMeta} />
			<Text>Oops, you&apos;ve landed on a ghost page.</Text>
			<Link href='/signin'>Back to home page</Link>
		</Fragment>
	)
}

NotFound.getLayout = getCenteredWebsiteLayout

export default NotFound
