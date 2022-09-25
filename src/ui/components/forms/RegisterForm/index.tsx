import {
	VStack,
	StackProps,
	forwardRef,
	FormControl,
	Input,
	Text,
	Button,
	FormErrorMessage,
	FormLabel,
	FormHelperText
} from '@chakra-ui/react'
import { useForm } from 'ui/hooks'

export interface RegisterFormProps extends StackProps {
	name?: string
}

export const RegisterForm = forwardRef<RegisterFormProps, 'form'>(
	(props, ref) => {
		const { registerForm } = useForm()
		return (
			<form style={{ width: '100%' }} onSubmit={registerForm.handleSubmit}>
				<VStack {...props} ref={ref}>
					<FormControl
						isRequired
						isInvalid={
							registerForm.touched.email && registerForm.errors.email
								? true
								: false
						}
						isDisabled={registerForm.isSubmitting}
					>
						<FormLabel htmlFor='register-form-email'>Email address</FormLabel>
						<Input
							id='register-form-email'
							type='email'
							placeholder='you@yourcompany.com'
							{...registerForm.getFieldProps('email')}
						/>
						<FormErrorMessage>{registerForm.errors.email}</FormErrorMessage>
					</FormControl>
					<FormControl
						isRequired
						isInvalid={
							registerForm.touched.password && registerForm.errors.password
								? true
								: false
						}
						isDisabled={registerForm.isSubmitting}
					>
						<FormLabel htmlFor='register-form-password'>Password</FormLabel>
						<Input
							id='register-form-password'
							type='password'
							placeholder='********'
							{...registerForm.getFieldProps('password')}
						/>
						<FormErrorMessage>{registerForm.errors.password}</FormErrorMessage>
					</FormControl>
					<FormControl
						isRequired
						isInvalid={
							registerForm.touched.passwordConfirmation &&
							registerForm.errors.passwordConfirmation
								? true
								: false
						}
						isDisabled={registerForm.isSubmitting}
					>
						<FormLabel htmlFor='register-form-password-confirmation'>
							Confirm password
						</FormLabel>
						<Input
							id='register-form-password-confirmation'
							type='password'
							placeholder='********'
							{...registerForm.getFieldProps('passwordConfirmation')}
						/>
						<FormHelperText textAlign='left'>
							Repeat the password added above
						</FormHelperText>
						<FormErrorMessage>
							{registerForm.errors.passwordConfirmation}
						</FormErrorMessage>
					</FormControl>
					<Button
						w='100%'
						type='submit'
						isLoading={registerForm.isSubmitting}
						isDisabled={
							!registerForm.touched.email ||
							registerForm.errors.email ||
							registerForm.errors.password ||
							registerForm.errors.passwordConfirmation
								? true
								: false
						}
					>
						Sign in
					</Button>
					{registerForm.status.error && (
						<Text color='red'>
							We couldn&apos;t sign you up. Please check that your email address
							hasn&apos;t already been used.
						</Text>
					)}
				</VStack>
			</form>
		)
	}
)

RegisterForm.defaultProps = {
	spacing: 4
} as RegisterFormProps
