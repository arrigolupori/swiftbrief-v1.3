import * as yup from 'yup'

export const helloSchema = yup.object().shape({
	message: yup.string().required()
})

export const magicLinkSchema = yup.object({
	email: yup.string().email().required('Email required')
})

export const credentialsSchema = yup.object({
	email: yup.string().email().required('Email required'),
	password: yup
		.string()
		.required('Password required')
		.min(8, 'Password should be at least 8 characters.')
})

export const registerSchema = yup.object({
	email: yup.string().email().required('Email required'),
	password: yup
		.string()
		.required('Password required')
		.min(8, 'Password should be at least 8 characters.'),
	passwordConfirmation: yup
		.string()
		.oneOf([yup.ref('password'), null], 'Passwords must match')
})

export const contactFormSchema = yup.object({
	email: yup.string().email().required('Email required'),
	message: yup
		.string()
		.required('Message required')
		.min(20, 'Please write a longer message')
})
