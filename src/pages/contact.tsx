import { Fragment } from 'react'
import { Meta, ButtonLink, ContactForm } from 'ui/components'
import { contactMeta } from 'data/meta'
import { NextPageWithLayout } from 'types/ui'
import { getCenteredWebsiteLayout } from 'ui/layouts'
import { Stack, Heading, Text, Link, useColorModeValue } from '@chakra-ui/react'

const Contact: NextPageWithLayout = () => {
	const blackToWhite = useColorModeValue('primary.500', 'white')
	return (
		<Fragment>
			<Meta {...contactMeta} />
			<Stack spacing='2'>
				<Heading size='md'>Contact Swiftbrief</Heading>
				<Text>
					Fill out the form below or reach out directly at{' '}
					<Link fontWeight='700' href='mailto:support@swiftbrief.com'>
						support@swiftbrief.com
					</Link>
					. We always reply within 1 business day (except national holidays).
				</Text>
			</Stack>
			<ContactForm />
			<ButtonLink variant='link' href='/' color={blackToWhite}>
				← Back to home page
			</ButtonLink>
		</Fragment>
	)
}

Contact.getLayout = getCenteredWebsiteLayout

export default Contact
