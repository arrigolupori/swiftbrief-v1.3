import {
	Box,
	BoxProps,
	Button,
	forwardRef,
	HStack,
	Text,
	useColorModeValue
} from '@chakra-ui/react'
import { BaseLink } from 'ui/components'
import { setCookie, getCookie } from 'cookies-next'
import { useState, useEffect } from 'react'

export const CookiesNotice = forwardRef<BoxProps, 'div'>((props, ref) => {
	const whiteToBlack = useColorModeValue('white', 'primary.500')
	const darkToExtraLightBlue = useColorModeValue('primary.400', 'secondary.200')
	const [dismissCookieNotice, setDismissCookieNotice] = useState(true)

	useEffect(() => {
		const cookie = getCookie('dismiss_cookie_notice')
		if (!cookie) setDismissCookieNotice(false)
	}, [])

	if (dismissCookieNotice) return null

	return (
		<Box ref={ref} {...props} display={dismissCookieNotice ? 'none' : 'block'}>
			<HStack
				pos='fixed'
				borderWidth='4px'
				justify='start'
				align='center'
				bottom='1em'
				py='0.5em'
				px='1em'
				mx='0.6em'
				borderRadius='md'
				shadow='md'
				bgColor={whiteToBlack}
				borderColor={darkToExtraLightBlue}
				zIndex={2}
				spacing={6}
			>
				<Text>
					Swiftbrief uses light cookies to keep track of signins.{' '}
					<BaseLink href='/state' fontWeight='700'>
						Learn more
					</BaseLink>
					.
				</Text>
				<Button
					px='1.75em'
					onClick={() => {
						setCookie('dismiss_cookie_notice', true)
						setDismissCookieNotice(true)
					}}
				>
					Got it
				</Button>
			</HStack>
		</Box>
	)
})
