import {
	Tooltip,
	Avatar,
	AvatarProps,
	forwardRef,
	useDisclosure,
	Modal,
	ModalContent,
	ModalHeader,
	Heading,
	useColorModeValue,
	Text,
	ModalBody,
	useBreakpointValue
} from '@chakra-ui/react'
import { Fragment } from 'react'
import { ContactForm } from 'ui/components'

export interface ContactToggleProps extends AvatarProps {
	name?: string
}

export const ContactToggle = forwardRef<ContactToggleProps, 'div'>(
	({ shadow, size, onClick, zIndex, borderColor, ...rest }, ref): any => {
		const mobileBreakpoint = useBreakpointValue({ base: true, md: false })
		const blackToBlue = useColorModeValue('primary.900', 'secondary.400')
		const blueToBlackGradient = useColorModeValue(
			'linear(to-br, secondary.200, secondary.700)',
			'linear(to-br, primary.400, primary.500)'
		)
		const contactToggle = useDisclosure()
		return (
			<Fragment>
				<Tooltip
					label='Hi, how can I help?'
					placement='left'
					p='0.75em'
					mr='0.5em'
				>
					<Avatar
						ref={ref}
						{...rest}
						borderColor={blackToBlue}
						borderWidth={mobileBreakpoint ? '3px' : '4px'}
						shadow={contactToggle.isOpen ? 'xl' : 'md'}
						size={mobileBreakpoint ? 'lg' : 'xl'}
						onClick={contactToggle.onOpen}
						zIndex={1}
					/>
				</Tooltip>
				<Modal
					isOpen={contactToggle.isOpen}
					onClose={contactToggle.onClose}
					size='sm'
					blockScrollOnMount={false}
				>
					<ModalContent
						mx='1em'
						pos='absolute'
						right='2'
						w='auto'
						bottom={mobileBreakpoint ? '50' : '100'}
						bgGradient={blueToBlackGradient}
						shadow='md'
						p='1em 1em 2.5em 1em'
					>
						<ModalHeader textAlign='left'>
							<Heading as='h3' fontSize='1.2rem'>
								Contact Swiftbrief
							</Heading>
							<Text fontSize='1rem' fontWeight='normal'>
								Need help? We reply to all contact requests within 1 business
								day.
							</Text>
						</ModalHeader>
						<ModalBody>
							<ContactForm />
						</ModalBody>
					</ModalContent>
				</Modal>
			</Fragment>
		)
	}
)

ContactToggle.defaultProps = {
	pos: 'fixed',
	name: 'Support',
	src: '/img/portraits/support.jpeg',
	bottom: '6',
	right: '6',
	_hover: { shadow: 'xl', cursor: 'pointer' }
} as ContactToggleProps
