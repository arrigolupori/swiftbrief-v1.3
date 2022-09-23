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
	useBreakpointValue
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

export const HamburgerHeader = forwardRef<BoxProps, 'section'>((props, ref) => {
	const mobileMenu = useDisclosure()
	const mobileBreakpoint = useBreakpointValue({ base: true, md: false })
	const primaryToSecondary = useColorModeValue('primary', 'secondary')
	const blueToPitchBlack = useColorModeValue('secondary.500', 'primary.900')
	const blackToBlue = useColorModeValue('primary.500', 'secondary.500')
	const whiteToDarkGray = useColorModeValue('white', 'primary.400')
	const blackToExtraLightBlue = useColorModeValue(
		'primary.500',
		'secondary.200'
	)
	return (
		<Box as='section' {...props} ref={ref}>
			<Box as='nav' bg={blueToPitchBlack}>
				<Container maxW='1200px' py={{ base: '4', lg: '5' }}>
					<HStack spacing='10' justify='space-between'>
						<BaseLink href='/'>
							<FullLogo />
						</BaseLink>
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
																	justify='center'
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
																			<HStack spacing='4' p='3'>
																				<Icon
																					as={item.icon}
																					boxSize='6'
																					color={blackToBlue}
																				/>
																				<VStack spacing='1'>
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
											<ButtonLink href='/' width='100%'>
												Log in or sign up
											</ButtonLink>
										</VStack>
									</PopoverContent>
								</Popover>
							)}
							{!mobileBreakpoint && (
								<ButtonLink href='/' width='100%'>
									Log in or sign up
								</ButtonLink>
							)}
						</HStack>
					</HStack>
				</Container>
			</Box>
		</Box>
	)
})
