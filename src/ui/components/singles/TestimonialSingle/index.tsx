import {
	Box,
	Text,
	BoxProps,
	forwardRef,
	useColorModeValue,
	Img,
	Heading,
	VStack
} from '@chakra-ui/react'
import { Fragment } from 'react'
import { TestimonialItem } from 'types/ui'
import { QuoteIcon } from 'ui/components'

export const TestimonialSingle = forwardRef<TestimonialItem & BoxProps, 'div'>(
	({ testimonial, name, jobTitle, src, ...rest }, ref) => {
		const blackToBlue = useColorModeValue('primary.500', 'secondary.500')
		return (
			<Box ref={ref} {...rest}>
				<VStack spacing='5' textAlign='center'>
					<QuoteIcon
						color={blackToBlue}
						fontSize={{
							base: '3xl',
							md: '6xl'
						}}
					/>
					<Text fontSize='xl' fontWeight='medium' fontStyle='italic' mt='6'>
						{testimonial}
					</Text>
					<Fragment>
						<Img
							src={src}
							mx='auto'
							objectFit='cover'
							shadow='md'
							w='80px'
							h='80px'
							borderWidth='3px'
							borderStyle='solid'
							borderColor={blackToBlue}
							rounded='full'
						/>
						<Box mt='3'>
							<Heading
								as='h4'
								fontSize='0.9rem'
								fontStyle='normal'
								fontWeight='bold'
							>
								{name}
							</Heading>
							<Text fontSize='sm'>{jobTitle}</Text>
						</Box>
					</Fragment>
				</VStack>
			</Box>
		)
	}
)

TestimonialSingle.defaultProps = {
	maxW: '3xl',
	mx: 'auto',
	px: {
		base: '6',
		md: '8'
	},
	pt: '12',
	pb: '16'
} as BoxProps
