import {
	VStack,
	StackProps,
	forwardRef,
	FormControl,
	Input,
	Text,
	Button,
	FormErrorMessage
} from '@chakra-ui/react'
import { useForm } from 'ui/hooks'

export interface MagicLinkFormProps extends StackProps {
	name?: string
}

export const MagicLinkForm = forwardRef<MagicLinkFormProps, 'form'>(
	(props, ref) => {
		const { magicLinkForm } = useForm()
		return (
			<form onSubmit={magicLinkForm.handleSubmit}>
				{!magicLinkForm.status.success ? (
					<VStack {...props} ref={ref}>
						<FormControl
							isInvalid={
								magicLinkForm.touched.email && magicLinkForm.errors.email
									? true
									: false
							}
							isDisabled={magicLinkForm.isSubmitting}
						>
							<Input
								id='magic-link-email'
								type='email'
								placeholder='Your email address...'
								{...magicLinkForm.getFieldProps('email')}
							/>
							<FormErrorMessage>{magicLinkForm.errors.email}</FormErrorMessage>
						</FormControl>
						<Button
							w='100%'
							type='submit'
							isLoading={magicLinkForm.isSubmitting}
						>
							Sign in or register
						</Button>
						{magicLinkForm.status.error && (
							<Text color='red'>
								We couldn&apos;t send you the magic link. Please check that your
								email address is formatted correctly.
							</Text>
						)}
					</VStack>
				) : (
					<Text>
						Please check your email inbox and click on the button to sign in, no
						password required.
					</Text>
				)}
			</form>
		)
	}
)

MagicLinkForm.defaultProps = {
	spacing: 4
} as MagicLinkFormProps
