import nc from 'next-connect'
import { onError } from 'server/middleware'
import { readHello, createHello } from 'server/controllers'
import { withValidation } from 'next-validations'
import { methodNotAllowed } from 'server/utils'
import { helloSchema } from 'types/schema'

const validate = withValidation({
	schema: helloSchema,
	type: 'Yup',
	mode: 'body'
})

const handler = nc({ onError })

handler.get(readHello)
handler.post(validate(), createHello)
handler.all(methodNotAllowed)

export default handler
