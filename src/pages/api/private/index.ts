import nc from 'next-connect'
import { readHello } from 'server/controllers'
import { onError } from 'server/middleware'
import { methodNotAllowed } from 'server/utils'
import { authCheck } from 'server/utils'

const handler = nc({ onError })

handler.post(authCheck, readHello)
handler.all(methodNotAllowed)

export default handler
