import { LayoutProps } from 'types/ui'
import { MouseEventHandler } from 'react'

import NextNProgress from 'nextjs-progressbar'

import { signOut } from 'next-auth/react'
import { setCookie, getCookie } from 'cookies-next'
import { useState, useEffect, FC, ReactElement } from 'react'
import { AiOutlineSetting, AiOutlineLogout } from 'react-icons/ai'
import { ChevronRightIcon, ChevronLeftIcon } from '@chakra-ui/icons'
import { appNavItems } from 'data/sidebar'
import { IconType } from 'react-icons/lib'

import {
	Flex,
	Icon,
	Text,
	HStack,
	Tooltip,
	Divider,
	useColorModeValue,
	VStack
} from '@chakra-ui/react'

import { AppNavLink, BaseLink, FullLogo, MarkLogo } from 'ui/components'

export interface AppLayoutProps extends LayoutProps {
	onClick?: MouseEventHandler<HTMLDivElement | undefined>
}

export const MainAppLayout: FC<AppLayoutProps> = (props) => {
	const progress = useColorModeValue('#373938', '#99f9f2')
	const whiteToBlack = useColorModeValue('white', 'primary.500')
	const blackToExtraLightBlue = useColorModeValue(
		'primary.500',
		'secondary.200'
	)
	const extraLightGrayToDarkGray = useColorModeValue(
		'primary.10',
		'primary.400'
	)
	const [collapsedSidebar, setCollapsedSidebar] = useState(true)
	useEffect(() => {
		const cookie = getCookie('collapsed_sidebar')
		if (!cookie) setCollapsedSidebar(false)
	}, [])
	return (
		<Flex
			as='section'
			direction={{
				base: 'column',
				md: 'row'
			}}
			height='100vh'
			overflowY='auto'
			onClick={props.onClick}
		>
			<NextNProgress color={progress} options={{ showSpinner: false }} />
			{/* Mobile goes here */}
			<Flex as='section' minH='100vh' maxW='250px' pos='sticky' top='0'>
				<Flex
					flex='1'
					backgroundColor={whiteToBlack}
					overflowY='auto'
					maxW={{
						base: 'full',
						sm: 'xs'
					}}
					py={{
						base: '6',
						sm: '8'
					}}
					px={{
						base: '4',
						sm: '6'
					}}
				>
					<VStack justify='space-between' spacing='1'>
						<VStack spacing={9} shouldWrapChildren>
							<BaseLink href='/app/briefs'>
								{!collapsedSidebar ? <FullLogo invert /> : <MarkLogo invert />}
							</BaseLink>
							<VStack align='start' spacing={5} p='1em'>
								{appNavItems?.map((link, index) => (
									<AppNavLink
										key={`key-${index}-${link.title}`}
										href={link.href}
										label={collapsedSidebar ? link.title : ''}
										title={!collapsedSidebar ? link.title : ''}
										icon={link.icon as IconType}
									/>
								))}
							</VStack>
						</VStack>
						<VStack
							spacing={{
								base: '5',
								sm: '6'
							}}
						>
							{!collapsedSidebar && <></>}
							{!collapsedSidebar && (
								<Divider borderWidth='2px' borderRadius='10' />
							)}
							<VStack
								align='start'
								spacing={5}
								p='1em'
								mb={collapsedSidebar ? '2em' : '0'}
							>
								<AppNavLink
									label={collapsedSidebar ? 'Account' : ''}
									title={!collapsedSidebar ? 'Account' : ''}
									icon={AiOutlineSetting}
									href='/app/account'
								/>
								<AppNavLink
									label={collapsedSidebar ? 'Sign out' : ''}
									title={!collapsedSidebar ? 'Sign out' : ''}
									onClick={() => signOut()}
									icon={AiOutlineLogout}
									href='/#'
								/>
							</VStack>
						</VStack>
					</VStack>
				</Flex>
				<Icon
					as={collapsedSidebar ? ChevronRightIcon : ChevronLeftIcon}
					pos='absolute'
					right='1em'
					bottom='1em'
					boxSize={8}
					borderRadius='md'
					zIndex='1'
					_hover={{
						cursor: 'pointer',
						opacity: '0.8',
						bgColor: extraLightGrayToDarkGray
					}}
					onClick={() => {
						setCookie('collapsed_sidebar', !collapsedSidebar)
						setCollapsedSidebar(!collapsedSidebar)
					}}
				/>
			</Flex>

			{/* <AppAllowanceVStack /> */}
			{/* Mobile goes here */}
			{props.children}
		</Flex>
	)
}

export const getMainAppLayout = (page: ReactElement) => (
	<MainAppLayout>{page}</MainAppLayout>
)
