import { useFormik } from 'formik'
import { signIn, SignInResponse } from 'next-auth/react'
import {
	magicLinkSchema,
	contactFormSchema,
	credentialsSchema,
	registerSchema
} from 'types/schema'
import axios from 'axios'

export const useForm = () => {
	const contactForm = useFormik({
		initialValues: {
			email: '',
			message: ''
		},
		validationSchema: contactFormSchema,
		onSubmit: async (values, actions) => {
			const res = await axios
				.post('/api/public/support', values)
				.catch((error) => {
					actions.setSubmitting(false)
					actions.setStatus(error.message)
				})
			console.log(res)
		}
	})
	const magicLinkForm = useFormik({
		initialValues: {
			email: ''
		},
		initialStatus: {
			error: null,
			success: false
		},
		validationSchema: magicLinkSchema,
		onSubmit: async (values, actions) => {
			const { error } = (await signIn('email', {
				email: values.email,
				redirect: false,
				callbackUrl: '/app'
			})) as SignInResponse
			if (error) {
				actions.setStatus({ error, success: false })
				return
			} else actions.setStatus({ error: null, success: true })
		}
	})
	const credentialsForm = useFormik({
		initialValues: {
			email: '',
			password: ''
		},
		initialStatus: {
			error: null,
			success: false
		},
		validationSchema: credentialsSchema,
		onSubmit: async (values, actions) => {
			const { error } = (await signIn('credentials', {
				email: values.email,
				password: values.password,
				redirect: false,
				callbackUrl: '/app'
			})) as SignInResponse
			if (error) {
				actions.setStatus({ error, success: false })
				return
			} else actions.setStatus({ error: null, success: true })
		}
	})
	const registerForm = useFormik({
		initialValues: {
			email: '',
			password: '',
			passwordConfirmation: ''
		},
		initialStatus: {
			error: null,
			success: false
		},
		validationSchema: registerSchema,
		onSubmit: async (values, actions) => {
			console.log(values)
		}
	})
	return { contactForm, magicLinkForm, credentialsForm, registerForm }
}
