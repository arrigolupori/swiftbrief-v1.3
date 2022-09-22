import { VStack, StackProps, forwardRef } from '@chakra-ui/react'

export interface MagicLinkFormProps extends StackProps {
	name?: string
}

export const MagicLinkForm = forwardRef<MagicLinkFormProps, 'form'>(
	(props, ref) => {
		return (
			<VStack as='form' data-testid={props.name} ref={ref} {...props}>
				{props.children}
			</VStack>
		)
	}
)

MagicLinkForm.defaultProps = {
	padding: '1em'
} as MagicLinkFormProps
