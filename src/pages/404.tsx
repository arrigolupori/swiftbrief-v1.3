import { Fragment } from 'react'
import { Text } from '@chakra-ui/react'
import { Meta, ButtonLink } from 'ui/components'
import { notFoundMeta } from 'data/meta'
import { NextPageWithLayout } from 'types/ui'
import { getCenteredWebsiteLayout } from 'ui/layouts'

const NotFound: NextPageWithLayout = () => {
	return (
		<Fragment>
			<Meta {...notFoundMeta} />
			<Text>Oops, you&apos;ve landed on a ghost page.</Text>
			<ButtonLink href='/'>Back to home page</ButtonLink>
		</Fragment>
	)
}

NotFound.getLayout = getCenteredWebsiteLayout

export default NotFound
