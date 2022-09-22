import nodemailer from 'nodemailer'
import Mail from 'nodemailer/lib/mailer'

export const transporter = nodemailer.createTransport({
	host: 'smtp.mailersend.net',
	port: 587,
	secure: false,
	requireTLS: true,
	auth: {
		user: process.env.EMAIL_SERVER_USER,
		pass: process.env.EMAIL_SERVER_PASSWORD
	},
	logger: true
})
