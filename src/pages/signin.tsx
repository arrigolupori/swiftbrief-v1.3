import { Fragment } from 'react'

import { signInMeta } from 'data/meta'
import { BaseLink, FullLogo, Meta } from 'ui/components'
import { AiFillGoogleCircle, AiFillMail } from 'react-icons/ai'

import { Button, Divider, Heading, Input, Stack, Text } from '@chakra-ui/react'
import { NextPageWithLayout } from 'types/ui'
import { getCenteredWebsiteLayout } from 'ui/layouts'

const Signin: NextPageWithLayout = () => {
	return (
		<Fragment>
			<Meta {...signInMeta} />
			<Stack spacing='8'>
				<Stack spacing='6' align='center'>
					<BaseLink href='/'>
						<FullLogo />
					</BaseLink>
					<Stack spacing='3' textAlign='center'>
						<Heading size='md'>Sign in to Swiftbrief</Heading>
						<Text color='muted'>Resume working on your content briefs</Text>
					</Stack>
				</Stack>
				<Stack spacing='6'>
					<Button leftIcon={<AiFillMail size={25} />} iconSpacing='3'>
						Use a magic link
					</Button>
					<Button leftIcon={<AiFillGoogleCircle size={25} />} iconSpacing='3'>
						Continue with Google
					</Button>
					<Divider />
					<Stack spacing='4'>
						<Input placeholder='Enter your email' />
						<Input placeholder='Enter your password' />
						<Button>Continue with email</Button>
					</Stack>
				</Stack>
				<Stack spacing='0.5' align='center'>
					<Text fontSize='sm' color='muted'>
						Having trouble logging in?
					</Text>
					<Button variant='link' colorScheme='blue' size='sm'>
						Contact us
					</Button>
				</Stack>
				<Text fontSize='xs' color='subtle' textAlign='center'>
					By continuing, you acknowledge that you have read, understood, and
					agree to our terms and condition
				</Text>
			</Stack>
		</Fragment>
	)
}

Signin.getLayout = getCenteredWebsiteLayout

export default Signin
