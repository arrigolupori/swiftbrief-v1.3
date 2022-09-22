import * as yup from 'yup'

export const helloSchema = yup.object().shape({
	message: yup.string().required()
})
