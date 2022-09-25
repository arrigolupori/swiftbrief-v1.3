import {
	TextareaProps,
	forwardRef,
	useColorModeValue,
	Textarea
} from '@chakra-ui/react'

export const BaseArea = forwardRef<TextareaProps, 'textarea'>(
	({ _placeholder, ...rest }, ref) => {
		const slightAzureToDarkerBlack = useColorModeValue(
			'secondary.10',
			'primary.700'
		)
		const lightGrayToAzure = useColorModeValue('primary.300', 'secondary.25')
		return (
			<Textarea
				_placeholder={{
					color: lightGrayToAzure,
					fontStyle: 'italic',
					opacity: 0.8,
					fontSize: '0.95rem'
				}}
				backgroundColor={slightAzureToDarkerBlack}
				{...rest}
				ref={ref}
			/>
		)
	}
)
