import { extendTheme, ThemeOverride } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const overrides: ThemeOverride = {
	fonts: {
		heading: 'Orbitron, -apple-system, system-ui, sans-serif',
		body: 'Nunito Sans, -apple-system, system-ui, sans-serif'
	},
	styles: {
		global: (props) => ({
			body: {
				bgColor: mode('#fff', 'primary.500')(props)
			}
		})
	},
	components: {
		Heading: {
			baseStyle: (props) => ({
				letterSpacing: '0.025em',
				color: mode('primary.500', 'secondary.500')(props)
			})
		},
		Button: {
			baseStyle: {
				letterSpacing: '0.025em'
			},
			variants: {
				solid: (props) => ({
					color: mode('white', 'primary.500')(props),
					backgroundColor: mode('primary.500', 'secondary.200')(props),
					_hover: {
						backgroundColor: mode('primary.400', 'secondary.100')(props),
						_disabled: {
							background: mode('primary.400', 'secondary.100')(props)
						}
					},
					_active: { bgColor: mode('primary.300', 'secondary.50')(props) },
					focus: {
						boxShadow: '0 0 0 3px #23aaa0'
					}
				}),
				ghost: {
					_hover: { bgColor: 'transparent', opacity: '0.7' },
					_active: { bgColor: 'transparent' },
					_focus: { borderColor: '' }
				}
			}
		}
	},
	colors: {
		primary: {
			0: '#f2f2f2',
			10: '#e9e9e9',
			25: '#d3d3d3',
			50: '#bcbdbd',
			100: '#a6a7a7',
			200: '#646564',
			300: '#4d4f4e',
			400: '#373938',
			500: '#212322',
			600: '#1e201f',
			700: '#1a1c1b',
			800: '#171918',
			900: '#141514'
		},
		secondary: {
			0: '#f3fefd',
			10: '#ebfefc',
			25: '#d6fdfa',
			50: '#c2fbf7',
			100: '#adfaf5',
			200: '#99f9f2',
			300: '#84f8ef',
			400: '#70f7ed',
			500: '#32f3e5',
			600: '#2ddbce',
			700: '#28c2b7',
			800: '#23aaa0',
			900: '#1e9289'
		}
	}
}

export const swiftbriefTheme = extendTheme(overrides)
