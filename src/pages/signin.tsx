import { Fragment } from 'react'

import { signInMeta } from 'data/meta'
import { AuthModule, Meta } from 'ui/components'

import { NextPageWithLayout } from 'types/ui'
import { getCenteredWebsiteLayout } from 'ui/layouts'
import { getSession } from 'next-auth/react'
import { GetServerSideProps } from 'next'
import { Session } from 'next-auth'

export const getServerSideProps: GetServerSideProps = async (context) => {
	const authSession = await getSession(context)
	if (authSession)
		return {
			redirect: {
				destination: '/app',
				permanent: false
			}
		}
	return {
		props: {}
	}
}

const Signin: NextPageWithLayout<Session> = () => {
	return (
		<Fragment>
			<Meta {...signInMeta} />
			<AuthModule />
		</Fragment>
	)
}

Signin.getLayout = getCenteredWebsiteLayout

export default Signin
