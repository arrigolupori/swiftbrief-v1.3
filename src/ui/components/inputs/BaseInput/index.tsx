import {
	Input,
	InputProps,
	forwardRef,
	useColorModeValue
} from '@chakra-ui/react'

export const BaseInput = forwardRef<InputProps, 'input'>((props, ref) => {
	const slightAzureToDarkerBlack = useColorModeValue(
		'secondary.10',
		'primary.700'
	)
	const lightGrayToAzure = useColorModeValue('primary.300', 'secondary.25')
	return (
		<Input
			_placeholder={{
				color: lightGrayToAzure,
				fontStyle: 'italic',
				opacity: 0.8,
				fontSize: '0.95rem'
			}}
			backgroundColor={slightAzureToDarkerBlack}
			{...props}
			ref={ref}
		/>
	)
})
