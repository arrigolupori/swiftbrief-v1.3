import type { GetServerSideProps } from 'next'
import { Fragment } from 'react'
import { Text } from '@chakra-ui/react'
import { BaseLink, ButtonLink, Meta } from 'ui/components'
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
	return (
		<Fragment>
			<Meta {...errorMeta} />
			<Text>
				Oops, you&apos;ve encountered a {error.toLowerCase()} error.{' '}
				{error === 'Verification' ? (
					<Text>
						Please request a new link from our{' '}
						{
							<BaseLink fontWeight='700' href='/signin'>
								signin page
							</BaseLink>
						}
						.
					</Text>
				) : (
					<Text>Please go through the process again.</Text>
				)}
			</Text>
			{error === 'Verification' && (
				<ButtonLink href='/'>Back to home</ButtonLink>
			)}
		</Fragment>
	)
}

Error.getLayout = getCenteredWebsiteLayout

export default Error
