import {
	forwardRef,
	SimpleGrid,
	Stack,
	Square,
	Icon,
	Heading,
	Text,
	SimpleGridProps,
	useColorModeValue
} from '@chakra-ui/react'
import { SubNavItem } from 'types/ui'
import { ButtonLink } from 'ui/components/links'

interface DirectoryGridProps extends SimpleGridProps {
	items?: SubNavItem[]
}

export const DirectoryGrid = forwardRef<DirectoryGridProps, 'div'>(
	(props, ref) => {
		const blackToBlue = useColorModeValue('primary.500', 'secondary.500')
		return (
			<SimpleGrid ref={ref} {...props}>
				{props.items?.map((feature, index) => (
					<Stack
						key={`key-${index}-${feature.title}`}
						spacing={{ base: '4', md: '5' }}
						align='center'
						textAlign='center'
					>
						<Square
							size={{ base: '10', md: '12' }}
							bg='accent'
							color='inverted'
							borderRadius='lg'
						>
							<Icon as={feature.icon} boxSize={14} color={blackToBlue} />
						</Square>
						<Stack spacing={{ base: '1', md: '2' }}>
							<Heading fontSize={{ base: 'lg', md: 'xl' }} color={blackToBlue}>
								{feature.title}
							</Heading>
							<Text>{feature.description}</Text>
						</Stack>
						<ButtonLink href={feature.href}>{feature.buttonText}</ButtonLink>
					</Stack>
				))}
			</SimpleGrid>
		)
	}
)

DirectoryGrid.defaultProps = {
	maxW: '700px',
	mx: 'auto',
	columns: { base: 1, lg: 2 },
	columnGap: 8,
	rowGap: { base: 10, md: 16 },
	py: '20'
} as DirectoryGridProps
