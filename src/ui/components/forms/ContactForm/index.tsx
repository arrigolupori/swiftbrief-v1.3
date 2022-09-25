import {
	VStack,
	StackProps,
	forwardRef,
	FormControl,
	FormLabel,
	FormErrorMessage,
	Button,
	Text
} from '@chakra-ui/react'
import { BaseInput, BaseArea } from 'ui/components'
import { useForm } from 'ui/hooks'

export interface ContactFormProps extends StackProps {
	name?: string
}

export const ContactForm = forwardRef<ContactFormProps, 'div'>(
	({ name, ...rest }, ref): any => {
		const { contactForm } = useForm()
		return !contactForm.status.success ? (
			<form style={{ width: '100%' }} onSubmit={contactForm.handleSubmit}>
				<VStack ref={ref} {...rest} data-testid={name}>
					<FormControl
						isRequired
						isInvalid={
							contactForm.touched.email && contactForm.errors.email
								? true
								: false
						}
					>
						<FormLabel>Email address</FormLabel>
						<BaseInput
							id='contact-form-email'
							type='email'
							{...contactForm.getFieldProps('email')}
							placeholder='Your email address...'
						/>
						<FormErrorMessage>{contactForm.errors.email}</FormErrorMessage>
					</FormControl>
					<FormControl
						isRequired
						isInvalid={
							contactForm.touched.message && contactForm.errors.message
								? true
								: false
						}
					>
						<FormLabel>What do you need help with?</FormLabel>
						<BaseArea
							id='contact-form-message'
							{...contactForm.getFieldProps('message')}
							placeholder="Hello team, I would need additional information or support on Swiftbrief's functionality..."
						/>
						<FormErrorMessage>{contactForm.errors.message}</FormErrorMessage>
					</FormControl>
					<Button
						w='100%'
						isDisabled={
							!contactForm.touched.email ||
							contactForm.errors.email ||
							contactForm.errors.message
								? true
								: false
						}
						isLoading={contactForm.isSubmitting}
						type='submit'
					>
						Submit your message
					</Button>
					{contactForm.status.error && (
						<Text color='red'>{contactForm.status.error}</Text>
					)}
				</VStack>
			</form>
		) : (
			<Text>
				Thanks for reaching out! A member of Swiftbrief&apos;s team will get
				back to you within 1 business day.
			</Text>
		)
	}
)

ContactForm.defaultProps = {
	alignItems: 'start',
	spacing: 4
} as ContactFormProps
