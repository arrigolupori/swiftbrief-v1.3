import { FC, Fragment, ReactElement } from 'react'
import { ColumnsFooter } from 'ui/components/footers'
import { useColorModeValue, VStack } from '@chakra-ui/react'
import {
	BaseLink,
	CookiesNotice,
	FullLogo,
	HamburgerHeader
} from 'ui/components'
import { LayoutProps } from 'types/ui'

export const MainWebsiteLayout: FC<LayoutProps> = (props) => (
	<Fragment>
		<HamburgerHeader />
		{props.children}
		<ColumnsFooter />
		<CookiesNotice />
	</Fragment>
)

export const CenteredWebsiteLayout: FC<LayoutProps> = (props) => {
	const blueToBlackGradient = useColorModeValue(
		'linear(to-br, secondary.500, secondary.900)',
		'linear(to-br, primary.900, primary.700)'
	)
	const whiteToBlack = useColorModeValue('white', 'primary.500')
	const blackToWhite = useColorModeValue('primary.500', 'white')
	return (
		<VStack
			bgGradient={blueToBlackGradient}
			color={blackToWhite}
			height='100vh'
			textAlign='center'
			py='3em'
			px='1em'
			spacing='9'
		>
			<BaseLink href='/'>
				<FullLogo />
			</BaseLink>
			<VStack
				maxW='md'
				p='8'
				bgColor={whiteToBlack}
				boxShadow='xl'
				borderRadius='xl'
				spacing='5'
			>
				{props.children}
			</VStack>
		</VStack>
	)
}

export const getMainWebsiteLayout = (page: ReactElement) => (
	<MainWebsiteLayout>{page}</MainWebsiteLayout>
)

export const getCenteredWebsiteLayout = (page: ReactElement) => (
	<CenteredWebsiteLayout>{page}</CenteredWebsiteLayout>
)

export const getDirectoryWebsiteLayout = (page: ReactElement) => (
	<MainWebsiteLayout>
		<VStack
			as='section'
			maxW={{ base: 'xl', md: '6xl' }}
			mx='auto'
			my='6em'
			px={{ base: '6', md: '8' }}
		>
			{page}
		</VStack>
	</MainWebsiteLayout>
)
