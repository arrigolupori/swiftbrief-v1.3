import type { GetServerSideProps } from 'next'
import { Fragment } from 'react'
import { Text } from '@chakra-ui/react'
import { ButtonLink, Meta } from 'ui/components'
import { errorMeta } from 'data/meta'
import { NextPageWithLayout } from 'types/ui'
import { getCenteredWebsiteLayout } from 'ui/layouts'

export const getServerSideProps: GetServerSideProps = async (context) => {
	const { error } = context.query
	if (!error)
		return {
			redirect: {
				destination: '/',
				permanent: false
			}
		}
	return {
		props: {
			error
		}
	}
}

type ErrorProps = {
	error: 'Verification'
}

const Error: NextPageWithLayout<ErrorProps> = ({ error }) => {
	const message =
		error === 'Verification'
			? 'Please request a new link from our signin page.'
			: 'Please try again'
	return (
		<Fragment>
			<Meta {...errorMeta} />
			<Text>
				Oops, you&apos;ve encountered a {error.toLowerCase()} error. {message}
			</Text>
			{error === 'Verification' && (
				<ButtonLink href='/'>Back to home</ButtonLink>
			)}
		</Fragment>
	)
}

Error.getLayout = getCenteredWebsiteLayout

export default Error
