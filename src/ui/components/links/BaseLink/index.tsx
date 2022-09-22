import { forwardRef, Link, LinkProps } from '@chakra-ui/react'
import NextLink from 'next/link'

export interface BaseLinkProps extends LinkProps {
	href: string
	'data-testid'?: string
}

export const BaseLink = forwardRef<BaseLinkProps, 'div'>((props, ref) => {
	return (
		<NextLink href={props.href} passHref>
			<Link ref={ref} {...props} />
		</NextLink>
	)
})
