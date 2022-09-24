import { Fragment, useState } from 'react'

import { signInMeta } from 'data/meta'
import { BaseLink, MagicLinkForm, Meta } from 'ui/components'
import { AiFillGoogleCircle, AiFillMail } from 'react-icons/ai'

import { Button, Divider, Heading, Input, Stack, Text } from '@chakra-ui/react'
import { NextPageWithLayout } from 'types/ui'
import { getCenteredWebsiteLayout } from 'ui/layouts'
import { getSession, signIn } from 'next-auth/react'
import { GetServerSideProps } from 'next'
import { Session } from 'next-auth'

export const getServerSideProps: GetServerSideProps = async (context) => {
	const authSession = await getSession(context)
	if (authSession)
		return {
			redirect: {
				destination: '/app',
				permanent: false
			}
		}
	return {
		props: {}
	}
}

const Signin: NextPageWithLayout<Session> = () => {
	const [magicLink, setMagicLink] = useState(false)
	const [googleLink, setGoogleLink] = useState(false)
	return (
		<Fragment>
			<Meta {...signInMeta} />
			<Stack spacing='8'>
				<Stack spacing='6' align='center'>
					<Stack spacing='3' textAlign='center'>
						<Heading size='md'>Sign in to Swiftbrief</Heading>
						<Text color='muted'>Resume working on your content briefs</Text>
					</Stack>
				</Stack>
				{!magicLink ? (
					<Fragment>
						<Stack spacing='6'>
							<Button
								leftIcon={<AiFillMail size={25} />}
								iconSpacing='3'
								onClick={() => setMagicLink(true)}
							>
								Use a magic link
							</Button>
							<Button
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
							<Divider />
							<Stack spacing='4'>
								<Input placeholder='Enter your email...' />
								<Input placeholder='Enter your password...' />
								<Button>Continue with email</Button>
							</Stack>
						</Stack>
						<Stack spacing='0.5' align='center'>
							<Text fontSize='sm' color='muted'>
								Having trouble logging in?
							</Text>
							<BaseLink fontSize='sm' fontWeight='700' href='/'>
								Reset your password
							</BaseLink>
						</Stack>
					</Fragment>
				) : (
					<Fragment>
						<MagicLinkForm />
						<Button
							variant='link'
							size='sm'
							fontWeight='700'
							onClick={() => setMagicLink(false)}
						>
							← Use another method
						</Button>
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
			</Stack>
		</Fragment>
	)
}

Signin.getLayout = getCenteredWebsiteLayout

export default Signin
