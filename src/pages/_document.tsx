import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'
import { fontConfig } from 'config/www'

class MyDocument extends Document {
	render() {
		return (
			<Html lang='en'>
				<Head>
					{fontConfig.map((font, id) => (
						<link key={id} {...font} />
					))}
				</Head>
				<body>
					<Main />
					<NextScript />
					<ColorModeScript initialColorMode='light' />
				</body>
			</Html>
		)
	}
}

export default MyDocument
