import {
	VStack,
	StackProps,
	forwardRef,
	FormControl,
	Input,
	Text,
	Button,
	FormErrorMessage,
	FormLabel
} from '@chakra-ui/react'
import { useForm } from 'ui/hooks'

export interface CredentialsFormProps extends StackProps {
	name?: string
}

export const CredentialsForm = forwardRef<CredentialsFormProps, 'form'>(
	(props, ref) => {
		const { credentialsForm } = useForm()
		return (
			<form style={{ width: '100%' }} onSubmit={credentialsForm.handleSubmit}>
				<VStack {...props} ref={ref}>
					<FormControl
						isRequired
						isInvalid={
							credentialsForm.touched.email && credentialsForm.errors.email
								? true
								: false
						}
						isDisabled={credentialsForm.isSubmitting}
					>
						<FormLabel>Email address</FormLabel>
						<Input
							id='credentials-email'
							type='email'
							placeholder='you@yourcompany.com'
							{...credentialsForm.getFieldProps('email')}
						/>
						<FormErrorMessage>{credentialsForm.errors.email}</FormErrorMessage>
					</FormControl>
					<FormControl
						isRequired
						isInvalid={
							credentialsForm.touched.password &&
							credentialsForm.errors.password
								? true
								: false
						}
						isDisabled={credentialsForm.isSubmitting}
					>
						<FormLabel htmlFor='credentials-password'>Password</FormLabel>
						<Input
							id='credentials-password'
							type='password'
							placeholder='********'
							{...credentialsForm.getFieldProps('password')}
						/>
						<FormErrorMessage>
							{credentialsForm.errors.password}
						</FormErrorMessage>
					</FormControl>
					<Button
						w='100%'
						type='submit'
						isLoading={credentialsForm.isSubmitting}
						isDisabled={
							!credentialsForm.touched.email ||
							credentialsForm.errors.email ||
							credentialsForm.errors.password
								? true
								: false
						}
					>
						Sign in
					</Button>
					{credentialsForm.status.error && (
						<Text color='red'>
							We couldn&apos;t log you in. Please check that your email address
							and password are correct.
						</Text>
					)}
				</VStack>
			</form>
		)
	}
)

CredentialsForm.defaultProps = {
	spacing: 4
} as CredentialsFormProps
