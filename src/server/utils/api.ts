import { NextApiRequest, NextApiResponse } from 'next'

export const methodNotAllowed = async (
	req: NextApiRequest,
	res: NextApiResponse
) => res.status(405).send('Method not allowed')
