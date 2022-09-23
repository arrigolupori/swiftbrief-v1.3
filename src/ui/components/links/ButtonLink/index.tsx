import { forwardRef } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import NextLink from 'next/link'
import { ButtonLinkProps } from '../props'

export const ButtonLink = forwardRef<ButtonLinkProps, 'button'>(
	(props, ref) => (
		<NextLink href={props.href}>
			<Button {...props} ref={ref}>
				{props.children}
			</Button>
		</NextLink>
	)
)
