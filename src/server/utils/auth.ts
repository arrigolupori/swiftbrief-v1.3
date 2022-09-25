import {
	GetServerSidePropsContext,
	NextApiRequest,
	NextApiResponse
} from 'next'
import { getSession } from 'next-auth/react'

export const authCheck = async (req: NextApiRequest, res: NextApiResponse) => {
	const authSession = await getSession({ req })
	if (!authSession) res.status(401).send('Please sign in or use an API key')
}

export const routeCheck = async (context: GetServerSidePropsContext) => {
	const authSession = await getSession(context)
	if (!authSession)
		return {
			redirect: {
				destination: '/',
				permanent: false
			}
		}
	else
		return {
			props: {
				authSession
			}
		}
}
