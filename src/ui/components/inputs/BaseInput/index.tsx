import {
	Input,
	InputProps,
	forwardRef,
	useColorModeValue
} from '@chakra-ui/react'

export const BaseInput = forwardRef<InputProps, 'input'>((props, ref) => {
	const whiteToDarkBlack = useColorModeValue('white', 'primary.600')
	const lightGrayToExtraLightBlue = useColorModeValue(
		'primary.300',
		'secondary.200'
	)
	return (
		<Input
			_placeholder={{
				color: lightGrayToExtraLightBlue,
				fontStyle: 'italic',
				opacity: 0.8,
				fontSize: '0.95rem'
			}}
			backgroundColor={whiteToDarkBlack}
			{...props}
			ref={ref}
		/>
	)
})
