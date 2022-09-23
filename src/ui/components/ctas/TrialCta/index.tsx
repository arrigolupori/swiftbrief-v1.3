import {
	Box,
	Stack,
	Img,
	Text,
	VStack,
	Button,
	HStack,
	Icon,
	useColorModeValue
} from '@chakra-ui/react'
import { Fragment } from 'react'
import { CheckIcon } from '@chakra-ui/icons'

export const TrialCta = () => {
	const lighterBlueToDarkGray = useColorModeValue(
		'secondary.300',
		'primary.400'
	)
	const blackToBlue = useColorModeValue('primary.500', 'secondary.500')
	return (
		<Fragment>
			<Box
				mt='10'
				px='12'
				py='10'
				bgColor={lighterBlueToDarkGray}
				rounded='xl'
				shadow='md'
			>
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
								Delegate content at scale
							</Text>
							<Text fontSize={{ base: 'md', md: 'lg' }} mt='2'>
								Swiftbrief makes it easy to create and manage all your content
								briefs in one place
							</Text>
						</Box>
					</Stack>
					<VStack spacing={3}>
						<Button
							size='lg'
							mt={{ base: '6', lg: '0' }}
							w={{ base: 'full', lg: 'auto' }}
							minW='10rem'
							flexShrink={0}
							fontSize='md'
							fontWeight='bold'
						>
							Get a free 7-day trial
						</Button>

						<HStack justify='center'>
							<Icon blockSize='0.6em' as={CheckIcon} />
							<Text fontSize='0.8rem'>No credit card required</Text>
						</HStack>
					</VStack>
				</Stack>
			</Box>
		</Fragment>
	)
}
