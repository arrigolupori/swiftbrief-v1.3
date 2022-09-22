import type { GetServerSideProps } from 'next'
import { Fragment } from 'react'
import Link from 'next/link'
import { Text } from '@chakra-ui/react'
import { Meta } from 'ui/components'
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
			{error === 'Verification' && <Link href='/signin'>Back to signin</Link>}
		</Fragment>
	)
}

Error.getLayout = getCenteredWebsiteLayout

export default Error
