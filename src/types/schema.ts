import * as yup from 'yup'

export const helloSchema = yup.object().shape({
	message: yup.string().required()
})

export const magicLinkSchema = yup.object({
	email: yup.string().email().required('Email required')
})
