import { catchAsyncErrors } from 'server/middleware'
import { NextApiRequest, NextApiResponse } from 'next'

export const readHello = catchAsyncErrors(
	async (req: NextApiRequest, res: NextApiResponse) => {
		// Controller methods
		const data = 'Hello world'
		res.status(200).json({
			status: 'success',
			data
		})
	}
)

export const createHello = catchAsyncErrors(
	async (req: NextApiRequest, res: NextApiResponse) => {
		const data = req.body
		// Controller methods
		res.status(200).json({
			status: 'success',
			data
		})
	}
)
