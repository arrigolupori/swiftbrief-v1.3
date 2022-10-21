import { FC } from 'react'
import { Icon } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

export type PopoverIconProps = {
	isOpen: boolean
}

export const PopoverIcon: FC<PopoverIconProps> = ({ isOpen }) => {
	const iconStyles = {
		transform: isOpen ? 'rotate(-180deg)' : undefined,
		transition: 'transform 0.2s',
		transformOrigin: 'center'
	}
	return <Icon aria-hidden as={ChevronDownIcon} __css={iconStyles} />
}
