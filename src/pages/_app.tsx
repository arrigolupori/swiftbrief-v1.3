import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { SessionProvider } from 'next-auth/react'
import { swiftbriefTheme } from 'ui/styles/theme'
import { NextPageWithLayout } from 'types/ui'
import 'ui/styles/global.scss'
import { ContactToggle } from 'ui/components'

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout
}

const App = ({
	Component,
	// @ts-ignore
	pageProps: { session, ...pageProps }
}: AppPropsWithLayout) => {
	const getLayout = Component.getLayout ?? ((page) => page)
	return (
		<SessionProvider session={session}>
			<ChakraProvider theme={swiftbriefTheme}>
				{getLayout(<Component {...pageProps} />)}
				<ContactToggle />
			</ChakraProvider>
		</SessionProvider>
	)
}

export default App
