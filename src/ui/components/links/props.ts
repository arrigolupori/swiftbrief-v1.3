import { ButtonProps, LinkProps } from '@chakra-ui/react'

export interface ExtendedLinkProps extends LinkProps {
	href: string
}

export interface ButtonLinkProps extends ButtonProps {
	href: string
}
