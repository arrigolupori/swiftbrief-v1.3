import { BaseLink } from '../BaseLink'
import {
	HStack,
	Tooltip,
	Icon,
	Text,
	forwardRef,
	LinkProps,
	useColorModeValue
} from '@chakra-ui/react'
import { IconType } from 'react-icons/lib'

interface AppNavLinkProps extends LinkProps {
	icon: IconType
	href: `/${string}`
	label?: string
	title: string
}

export const AppNavLink = forwardRef<AppNavLinkProps, 'a'>((props, ref) => {
	const blackToExtraLightBlue = useColorModeValue(
		'primary.500',
		'secondary.200'
	)

	return (
		<BaseLink {...props} ref={ref}>
			<HStack spacing='3' _hover={{ opacity: '0.8' }}>
				<Tooltip label={props.label} bgColor={blackToExtraLightBlue}>
					<span>
						<Icon as={props.icon} boxSize='7' />
					</span>
				</Tooltip>
				<Text fontSize='1.1rem'>{props.title}</Text>
			</HStack>
		</BaseLink>
	)
})
