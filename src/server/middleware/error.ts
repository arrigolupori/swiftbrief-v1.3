import { NextApiRequest, NextApiResponse } from 'next'

export const onError = (
	error: Error,
	req: NextApiRequest,
	res: NextApiResponse,
	next: () => void
) => {
	console.error(error.stack)
	res.status(500).end(error.toString())
	next()
}

export const catchAsyncErrors =
	(func: any) =>
	(req: NextApiRequest, res: NextApiResponse, next: () => void) =>
		Promise.resolve(func(req, res, next)).catch(next)
