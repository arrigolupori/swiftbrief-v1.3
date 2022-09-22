import { forwardRef, Link, LinkProps } from '@chakra-ui/react'
import NextLink from 'next/link'

export interface BaseLinkProps extends LinkProps {
	href: string
}

export const BaseLink = forwardRef<BaseLinkProps, 'div'>((props, ref) => {
	return (
		<NextLink href={props.href} passHref>
			<Link ref={ref} {...props} />
		</NextLink>
	)
})

BaseLink.defaultProps = {
	_hover: { opacity: 0.7 }
} as LinkProps
