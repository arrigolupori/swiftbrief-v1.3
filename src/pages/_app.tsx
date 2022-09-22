import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { SessionProvider } from 'next-auth/react'

const App = ({
	Component,
	pageProps: { session, ...pageProps }
}: AppProps<any>) => {
	return (
		<SessionProvider session={session}>
			<ChakraProvider>
				<Component {...pageProps} />
			</ChakraProvider>
		</SessionProvider>
	)
}

export default App
