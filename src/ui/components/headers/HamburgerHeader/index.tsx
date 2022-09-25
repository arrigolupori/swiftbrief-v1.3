import {
	BoxProps,
	forwardRef,
	useColorModeValue,
	Box,
	Container,
	HStack,
	Flex,
	ButtonGroup,
	Tooltip,
	Popover,
	PopoverTrigger,
	Button,
	PopoverContent,
	VStack,
	Icon,
	Text,
	SimpleGrid,
	IconButton,
	Spacer,
	useDisclosure,
	useBreakpointValue,
	Badge
} from '@chakra-ui/react'
import { headerNavItems, mobileNavItems } from 'data/header'
import { Fragment } from 'react'
import {
	BaseLink,
	FullLogo,
	ColorModeToggle,
	PopoverIcon,
	ButtonLink
} from 'ui/components'
import { AiOutlineMenu } from 'react-icons/ai'
import { useSession } from 'next-auth/react'

export const HamburgerHeader = forwardRef<BoxProps, 'section'>((props, ref) => {
	const authSession = useSession()
	const mobileMenu = useDisclosure()
	const mobileBreakpoint = useBreakpointValue({ base: true, md: false })
	const tabletBreakpoint = useBreakpointValue({ md: true, lg: false })
	const primaryToSecondary = useColorModeValue('primary', 'secondary')
	const blueToPitchBlack = useColorModeValue('secondary.500', 'primary.900')
	const blackToBlue = useColorModeValue('primary.500', 'secondary.500')
	const whiteToDarkGray = useColorModeValue('white', 'primary.400')
	const blackToExtraLightBlue = useColorModeValue(
		'primary.500',
		'secondary.200'
	)

	const AuthButtons = () =>
		!authSession.data ? (
			<Fragment>
				<ButtonLink
					href='/signin'
					width='100%'
					variant='outline'
					colorScheme={primaryToSecondary}
					_hover={{ bgColor: '', opacity: 0.7 }}
				>
					Sign in
				</ButtonLink>
				<ButtonLink href='/register' width='100%'>
					Free trial
				</ButtonLink>
			</Fragment>
		) : (
			<ButtonLink href='/app' width='100%'>
				Go to dashboard
			</ButtonLink>
		)

	return (
		<Box as='section' {...props} ref={ref}>
			<Box as='nav' bg={blueToPitchBlack}>
				<Container maxW='1200px' py={{ base: '4', lg: '5' }}>
					<HStack spacing='10' justify='space-between'>
						<HStack spacing='5'>
							<BaseLink href='/'>
								<FullLogo />
							</BaseLink>
							{!mobileBreakpoint && (
								<BaseLink href='/changelog'>
									<Badge
										borderRadius='0.3em'
										p='0.3em 0.8em 0.4em 0.8em'
										colorScheme='secondary'
									>
										v1.3
									</Badge>
								</BaseLink>
							)}
						</HStack>

						<Flex justify='space-between' flex='1'>
							{!mobileBreakpoint && (
								<ButtonGroup spacing='8'>
									{headerNavItems.map((link, index) => (
										<Popover
											key={`key-${index}-${link.title}`}
											trigger='hover'
											openDelay={0}
											placement='bottom'
											defaultIsOpen={false}
											gutter={12}
										>
											{({ isOpen }) => (
												<Fragment>
													<PopoverTrigger>
														<Button
															display={
																link.hideOnTablet && tabletBreakpoint
																	? 'none'
																	: 'inherit'
															}
															mr='-0.5em'
															variant='link'
															color='main'
															fontWeight='400'
															rightIcon={
																link.popover ? (
																	<PopoverIcon isOpen={isOpen} />
																) : (
																	<></>
																)
															}
															_hover={{ textDecor: 'none', opacity: 0.8 }}
														>
															<BaseLink href={link.href}>{link.title}</BaseLink>
														</Button>
													</PopoverTrigger>
													{link.popover && (
														<PopoverContent
															mt='1em'
															p='5'
															width={{ base: 'sm', md: '2xl' }}
															bgColor={whiteToDarkGray}
														>
															<VStack align='middle'>
																<HStack
																	py='0.5em'
																	spacing={6}
																	borderWidth='4px'
																	p='1em'
																	borderRadius='md'
																	align='start'
																>
																	<Icon as={link.icon} boxSize={8} />
																	<Text fontSize='1.1rem'>
																		{link.description}
																	</Text>
																</HStack>
																<SimpleGrid
																	columns={{ base: 1, md: 2 }}
																	columnGap='6'
																	rowGap='2'
																>
																	{link.subNav.map((item, index) => (
																		<BaseLink
																			key={`key-${index}-${item.title}`}
																			variant='menu'
																			href={item.href}
																		>
																			<HStack align='start' spacing='4' p='3'>
																				<Icon
																					as={item.icon}
																					boxSize='6'
																					color={blackToBlue}
																				/>
																				<VStack align='start' spacing='1'>
																					<Text
																						fontWeight='700'
																						color={blackToBlue}
																					>
																						{item.title}
																					</Text>
																					<Text fontSize='sm' color='muted'>
																						{item.description}
																					</Text>
																				</VStack>
																			</HStack>
																		</BaseLink>
																	))}
																</SimpleGrid>
															</VStack>
														</PopoverContent>
													)}
												</Fragment>
											)}
										</Popover>
									))}
								</ButtonGroup>
							)}
						</Flex>
						<HStack spacing='3'>
							<Tooltip
								mt='0.2em'
								label='Switch color mode'
								bgColor={blackToExtraLightBlue}
								placement='left'
							>
								<span>
									<ColorModeToggle />
								</span>
							</Tooltip>
							{mobileBreakpoint && (
								<Popover
									trigger='click'
									isOpen={mobileMenu.isOpen}
									placement='bottom'
									gutter={20}
									strategy='fixed'
								>
									<PopoverTrigger>
										<IconButton
											colorScheme={primaryToSecondary}
											icon={<AiOutlineMenu fontSize='1.25rem' />}
											aria-label='Open Menu'
											onClick={mobileMenu.onToggle}
										/>
									</PopoverTrigger>
									<PopoverContent
										width='100vw'
										borderRadius='0'
										p='5'
										shadow='xl'
										bgColor={whiteToDarkGray}
										border='none'
									>
										<VStack align='start'>
											{mobileNavItems?.map((item, index) => (
												<BaseLink
													key={`key-${index}-${item.title}`}
													href={item.href}
												>
													<HStack spacing='4' p='3'>
														<Icon
															as={item.icon}
															boxSize='7'
															color={blackToBlue}
														/>
														<VStack spacing='1' align='start'>
															<Text
																color={blackToBlue}
																fontFamily='heading'
																fontWeight='700'
															>
																{item.title}
															</Text>
															<Text fontSize='sm' color='muted'>
																{item.description}
															</Text>
														</VStack>
													</HStack>
												</BaseLink>
											))}
											<Spacer />
											<AuthButtons />
										</VStack>
									</PopoverContent>
								</Popover>
							)}
							{!mobileBreakpoint && (
								<Fragment>
									<AuthButtons />
								</Fragment>
							)}
						</HStack>
					</HStack>
				</Container>
			</Box>
		</Box>
	)
})
