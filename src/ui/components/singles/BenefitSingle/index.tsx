import {
	forwardRef,
	StackProps,
	VStack,
	Square,
	useColorModeValue,
	Icon,
	Heading,
	Text
} from '@chakra-ui/react'
import { BenefitItem } from 'types/ui'

export const BenefitSingle = forwardRef<BenefitItem & StackProps, 'div'>(
	({ icon, title, description, ...rest }, ref) => {
		const blackToBlue = useColorModeValue('primary.500', 'secondary.500')
		return (
			<VStack ref={ref} {...rest}>
				<Square
					size={{ base: '10', md: '12' }}
					bg='accent'
					color='inverted'
					borderRadius='lg'
				>
					<Icon as={icon} boxSize={14} color={blackToBlue} />
				</Square>
				<VStack spacing={{ base: '1', md: '2' }}>
					<Heading fontSize={{ base: 'lg', md: 'xl' }}>{title}</Heading>
					<Text>{description}</Text>
				</VStack>
			</VStack>
		)
	}
)

BenefitSingle.defaultProps = {
	spacing: { base: '4', md: '5' },
	textAlign: 'center'
} as StackProps
