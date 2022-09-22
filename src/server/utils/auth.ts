import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'

export const authCheck = async (req: NextApiRequest, res: NextApiResponse) => {
	const authSession = await getSession({ req })
    console.log(authSession)
	if (!authSession) res.status(401).send('Please log in or use an API key')
}
