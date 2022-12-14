import { forwardRef, Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import { ExtendedLinkProps } from '../props'

export const BaseLink = forwardRef<ExtendedLinkProps, 'a'>((props, ref) => {
	return (
		<NextLink href={props.href} passHref>
			<Link ref={ref} {...props} />
		</NextLink>
	)
})

BaseLink.defaultProps = {
	_hover: { opacity: 0.8 }
} as ExtendedLinkProps
