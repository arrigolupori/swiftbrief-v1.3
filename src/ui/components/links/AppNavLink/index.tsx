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

export const AppNavLink = forwardRef<AppNavLinkProps, 'a'>(
	({ icon, label, title, ...rest }, ref) => {
		const blackToExtraLightBlue = useColorModeValue(
			'primary.500',
			'secondary.200'
		)

		return (
			<BaseLink {...rest} ref={ref}>
				<HStack spacing='3' _hover={{ opacity: '0.8' }}>
					<Tooltip label={label} bgColor={blackToExtraLightBlue}>
						<span>
							<Icon as={icon} boxSize='7' />
						</span>
					</Tooltip>
					<Text pb='0.2em' fontSize='1.1rem'>
						{title}
					</Text>
				</HStack>
			</BaseLink>
		)
	}
)
