import { Icon, useColorMode } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

export const ColorModeToggle = () => {
	const { colorMode, toggleColorMode } = useColorMode()
	return (
		<Icon
			as={colorMode === 'dark' ? SunIcon : MoonIcon}
			onClick={toggleColorMode}
			aria-label='Switch color mode'
			_hover={{ opacity: 0.7, cursor: 'pointer' }}
			mx='3'
			boxSize='5'
		/>
	)
}
