import nc from 'next-connect'
import { onError } from 'server/middleware'
import { withValidation } from 'next-validations'
import { methodNotAllowed } from 'server/utils'
import { contactFormSchema } from 'types/schema'
import { createContactRequest } from 'server/controllers'

const validate = withValidation({
	schema: contactFormSchema,
	type: 'Yup',
	mode: 'body'
})

const handler = nc({ onError })

handler.post(validate(), createContactRequest)
handler.all(methodNotAllowed)

export default handler
