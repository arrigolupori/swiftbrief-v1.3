import {
	Box,
	Stack,
	Img,
	Text,
	VStack,
	HStack,
	Icon,
	useColorModeValue,
	forwardRef,
	BoxProps,
	Button
} from '@chakra-ui/react'
import { Fragment } from 'react'
import { CheckIcon } from '@chakra-ui/icons'
import { ButtonLink } from 'ui/components/links'

interface SimpleCtaProps extends BoxProps {
	title: string
	description: string
	ctaText: string
	ctaLinkOrFx: `/${string}` | (() => void)
	ctaPerk: string
	modal?: boolean
}

export const SimpleCta = forwardRef<SimpleCtaProps, 'div'>(
	(
		{
			title,
			description,
			ctaText,
			ctaLinkOrFx,
			ctaPerk,
			bgColor,
			modal,
			...rest
		},
		ref
	) => {
		const blackToBlue = useColorModeValue('primary.500', 'secondary.500')
		const blueToBlackGradient = useColorModeValue(
			'linear(to-br, secondary.200, secondary.700)',
			'linear(to-br, primary.300, primary.400)'
		)
		return (
			<Fragment>
				<Box {...rest} ref={ref} bgGradient={blueToBlackGradient}>
					<Stack
						align='center'
						direction={{ base: 'column', lg: 'row' }}
						spacing='5'
					>
						<Stack
							flex={1}
							w='full'
							align='center'
							direction={{ base: 'column', lg: 'row' }}
							spacing={8}
						>
							<Img
								w={{ base: '6rem', md: '8rem' }}
								h={{ base: '6rem', md: '8rem' }}
								rounded='full'
								objectFit='cover'
								src='/img/portraits/support.jpeg'
								alt='arrigo lupori swiftbrief customer service'
							/>
							<Box textAlign='center' maxW='400px'>
								<Text
									fontSize='xl'
									fontWeight='bold'
									color={blackToBlue}
									fontFamily='heading'
								>
									{title}
								</Text>
								<Text fontSize={{ base: 'md', md: 'lg' }} mt='2'>
									{description}
								</Text>
							</Box>
						</Stack>
						<VStack spacing={3}>
							{!modal ? (
								<ButtonLink
									size='lg'
									fontSize='md'
									href={ctaLinkOrFx as `/${string}`}
								>
									{ctaText}
								</ButtonLink>
							) : (
								<Button
									size='lg'
									fontSize='md'
									onClick={ctaLinkOrFx as () => null}
								>
									{ctaText}
								</Button>
							)}

							<HStack justify='center'>
								<Icon blockSize='0.8em' as={CheckIcon} />
								<Text fontSize='0.9rem'>{ctaPerk}</Text>
							</HStack>
						</VStack>
					</Stack>
				</Box>
			</Fragment>
		)
	}
)

SimpleCta.defaultProps = {
	px: '12',
	py: '10',
	rounded: 'xl',
	shadow: 'md'
} as BoxProps
