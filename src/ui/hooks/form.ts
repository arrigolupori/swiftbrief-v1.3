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
		initialStatus: {
			error: null,
			success: false
		},
		validationSchema: contactFormSchema,
		onSubmit: async (values, actions) => {
			try {
				await axios.post('/api/public/contact', values)
				actions.setStatus({ error: null, success: true })
			} catch (error: any) {
				actions.setStatus({ error: error.message, success: false })
			}
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
