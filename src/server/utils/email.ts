import path from 'path'
import { readFileSync } from 'fs'
import Handlebars from 'handlebars'

export const emailSetup = (templateName: string) => {
	const emailsDir = path.resolve(process.cwd(), 'src/server/templates')
	const emailFile = readFileSync(path.join(emailsDir, templateName), {
		encoding: 'utf8'
	})
	const email = Handlebars.compile(emailFile)
	return email
}
