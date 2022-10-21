import { catchAsyncErrors } from 'server/middleware'
import { NextApiRequest, NextApiResponse } from 'next'
import { contactFormSchema } from 'types/schema'
import { InferType } from 'yup'
import { emailSetup } from 'server/utils'
import { transporter } from 'server/clients'

export const createContactRequest = catchAsyncErrors(
	async (req: NextApiRequest, res: NextApiResponse) => {
		const { email, message } = req.body as InferType<typeof contactFormSchema>
		const contactFormEmail = emailSetup('contact-form-email.html')
		await transporter.sendMail(
			{
				from: 'Swiftbrief admin <admin@swiftbrief.com>',
				to: email,
				subject: `Contact request from ${email}`,
				html: contactFormEmail({
					base_url: process.env.NEXTAUTH_URL,
					message
				})
			},
			(error, result) => {
				if (error)
					return res.status(500).json({
						error: error.message
					})
				else
					return res.status(200).json({
						status: 'success',
						data: { result }
					})
			}
		)
	}
)
