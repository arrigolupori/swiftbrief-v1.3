import { extendTheme, ThemeOverride } from '@chakra-ui/react'

const overrides: ThemeOverride = {
	fonts: {
		heading: 'Orbitron, -apple-system, system-ui, sans-serif',
		body: 'Nunito Sans, -apple-system, system-ui, sans-serif'
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
