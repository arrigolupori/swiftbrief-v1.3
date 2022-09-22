import { Link } from '@chakra-ui/react'
import { signOut } from 'next-auth/react'
import type { GetServerSidePropsContext, NextPage } from 'next'
import { Fragment } from 'react'
import { routeCheck } from 'server/utils'
import { AuthInstance } from 'types/auth'

export const getServerSideProps = (context: GetServerSidePropsContext) =>
	routeCheck(context)

const AppRoot: NextPage<AuthInstance> = ({ authSession }) => {
	return (
		<Fragment>
			<h1>The app&apos;s root</h1>
			<p>Your role is {authSession.user.role}</p>
			<Link onClick={() => signOut()}>Sign out</Link>
		</Fragment>
	)
}

export default AppRoot
