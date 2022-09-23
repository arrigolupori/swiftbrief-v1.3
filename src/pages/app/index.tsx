import { Link } from '@chakra-ui/react'
import { signOut } from 'next-auth/react'
import type { GetServerSidePropsContext } from 'next'
import { Fragment } from 'react'
import { routeCheck } from 'server/utils'
import { AuthInstance } from 'types/auth'
import { Meta } from 'ui/components'
import { NextPageWithLayout } from 'types/ui'
import { getMainAppLayout } from 'ui/layouts'

export const getServerSideProps = (context: GetServerSidePropsContext) =>
	routeCheck(context)

const Dashboard: NextPageWithLayout<AuthInstance> = ({ authSession }) => {
	return (
		<Fragment>
			<Meta title='Your dashboard | Swiftbrief' />
			<h1>The app&apos;s root</h1>
			<p>Your role is {authSession.user.role}</p>
			<Link onClick={() => signOut()}>Sign out</Link>
		</Fragment>
	)
}

Dashboard.getLayout = getMainAppLayout

export default Dashboard
