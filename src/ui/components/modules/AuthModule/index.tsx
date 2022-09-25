import { useState, Fragment } from 'react'
import {
	useColorModeValue,
	Heading,
	Text,
	VStack,
	Button,
	StackProps,
	forwardRef
} from '@chakra-ui/react'
import {
	BaseLink,
	MagicLinkForm,
	RegisterForm,
	CredentialsForm
} from 'ui/components'
import { AiFillMail, AiFillGoogleCircle } from 'react-icons/ai'
import { signIn } from 'next-auth/react'

interface AuthModuleProps extends StackProps {
	register?: boolean
}

export const AuthModule = forwardRef<AuthModuleProps, 'div'>(
	({ register, ...rest }, ref) => {
		const [magicLink, setMagicLink] = useState(false)
		const [googleLink, setGoogleLink] = useState(false)
		const [credentialsLink, setCredentialsLink] = useState(false)

		const blackToWhite = useColorModeValue('primary.500', 'white')

		return (
			<VStack {...rest} ref={ref}>
				<VStack spacing='2'>
					<Heading size='md'>
						{register ? 'Get a free 7-day trial' : 'Sign in to Swiftbrief'}
					</Heading>
					<Text>
						{register
							? 'Register to Swiftbrief today and get a free trial for 7 days—no credit card required.'
							: 'Resume working on your content briefs'}
					</Text>
				</VStack>
				{magicLink && (
					<Fragment>
						<MagicLinkForm />
						<Button
							variant='link'
							color={blackToWhite}
							size='sm'
							fontWeight='700'
							onClick={() => setMagicLink(false)}
						>
							← Use another method
						</Button>
					</Fragment>
				)}
				{credentialsLink && (
					<Fragment>
						{register ? <RegisterForm /> : <CredentialsForm />}
						<Button
							variant='link'
							color={blackToWhite}
							size='sm'
							fontWeight='700'
							onClick={() => setCredentialsLink(false)}
						>
							← Use another method
						</Button>
						<VStack spacing='0.5' align='center'>
							<Text fontSize='sm' color='muted'>
								{register
									? 'Already have an account?'
									: 'Having trouble logging in?'}
							</Text>
							<BaseLink
								fontSize='sm'
								fontWeight='700'
								href={register ? '/signin' : '/'}
							>
								{register ? 'Sign in to Swiftbrief' : 'Reset your password'}
							</BaseLink>
						</VStack>
					</Fragment>
				)}
				{!magicLink && !credentialsLink && (
					<Fragment>
						<VStack spacing='6' w='100%'>
							<Button
								w='100%'
								leftIcon={<AiFillMail size={25} />}
								iconSpacing='3'
								onClick={() => setMagicLink(true)}
							>
								Use a magic link
							</Button>
							<Button
								w='100%'
								iconSpacing='3'
								leftIcon={<AiFillGoogleCircle size={25} />}
								onClick={() => {
									setGoogleLink(true)
									signIn('google', {
										callbackUrl: '/app'
									})
								}}
								isLoading={googleLink}
							>
								Continue with Google
							</Button>
							<Button
								variant='link'
								color={blackToWhite}
								size='sm'
								fontWeight='700'
								onClick={() => setCredentialsLink(true)}
							>
								... or use email and password →
							</Button>
						</VStack>
					</Fragment>
				)}

				<Text fontSize='xs' color='subtle' textAlign='center'>
					By continuing, you acknowledge that you have read, understood, and
					agree to our{' '}
					<BaseLink fontWeight='700' href='/terms'>
						terms and conditions
					</BaseLink>
					.
				</Text>
			</VStack>
		)
	}
)

AuthModule.defaultProps = {
	spacing: '8',
	pt: '0.5em'
} as AuthModuleProps
