import { ContainerProps, useColorModeValue, VStack } from '@chakra-ui/react'
import {
	Box,
	Container,
	Stack,
	Divider,
	forwardRef,
	Text,
	ButtonGroup,
	Link,
	SimpleGrid
} from '@chakra-ui/react'
import { footerColumns, socialLinks } from 'data/footer'
import { BaseLink } from '../../links'
import { FullLogo } from '../../logos'

export const ColumnsFooter = forwardRef<ContainerProps, 'div'>((props, ref) => {
	const blackToBlue = useColorModeValue('primary.500', 'secondary.500')
	const whiteToBlack = useColorModeValue('white', 'primary.500')
	return (
		<Box
			as='footer'
			data-testid='ColumnsFooter'
			bgColor={blackToBlue}
			color={whiteToBlack}
		>
			<Container {...props} ref={ref}>
				<Stack
					spacing='8'
					direction={{ base: 'column', md: 'row' }}
					justify='space-between'
					py={{ base: '12', md: '16' }}
				>
					<VStack spacing={{ base: '6', md: '8' }} align='start'>
						<BaseLink href='/'>
							<FullLogo />
						</BaseLink>
						<Text maxW='260px'>
							Helping marketers and editors deliver great content at scale
						</Text>
					</VStack>
					<Stack
						direction={{ base: 'column-reverse', md: 'column', lg: 'row' }}
						spacing={{ base: '12', md: '8' }}
					>
						<SimpleGrid columns={{ base: 2, md: 4 }} rowGap={9} columnGap={3}>
							{footerColumns?.map((column, index) => (
								<VStack
									key={`key-${index}-${column.title}`}
									spacing='4'
									minW='36'
									flex='1'
								>
									<Text
										letterSpacing='1px'
										fontFamily='heading'
										fontSize='sm'
										fontWeight='bold'
									>
										{column.title}
									</Text>
									<Stack spacing='3' shouldWrapChildren>
										{column.links?.map((link, index) => (
											<BaseLink
												key={`key-${index}-${link.slug}`}
												href={link.slug}
											>
												{link.anchor}
											</BaseLink>
										))}
									</Stack>
								</VStack>
							))}
						</SimpleGrid>
					</Stack>
				</Stack>
				<Divider borderColor='bg-accent-subtle' />
				<Stack
					pt='8'
					pb='12'
					justify='space-between'
					direction={{ base: 'column-reverse', md: 'row' }}
					align='center'
				>
					<Text fontSize='sm'>
						&copy; {new Date().getFullYear()} Swiftbrief | All rights reserved
					</Text>

					<ButtonGroup spacing={6}>
						{socialLinks.map((link, index) => (
							<Link
								key={`key-${index}-${link.url}`}
								href={link.url}
								target='_blank'
								rel='noreferrer'
								_hover={{ opacity: 0.8 }}
							>
								{link.icon}
							</Link>
						))}
					</ButtonGroup>
				</Stack>
			</Container>
		</Box>
	)
})

ColumnsFooter.defaultProps = {
	maxW: '1200px',
	role: 'contentinfo'
} as ContainerProps
