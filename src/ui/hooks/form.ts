import { useFormik } from 'formik'
import { signIn, SignInResponse } from 'next-auth/react'
import { magicLinkSchema } from 'types/schema'

export const useForm = () => {
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
	return { magicLinkForm }
}
