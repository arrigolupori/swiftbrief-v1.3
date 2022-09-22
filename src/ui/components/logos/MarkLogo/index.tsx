import { useColorModeValue, chakra } from '@chakra-ui/react'

export const MarkLogo = () => {
	const version = useColorModeValue('#212322', '#32f3e5')
	return (
		<chakra.svg
			version='1.1'
			id='Capa_2_1_'
			xmlns='http://www.w3.org/2000/svg'
			x='0px'
			y='0px'
			viewBox='0 0 110.5 110.5'
			width='auto'
			height='12'
			display='block'
		>
			<g>
				<g transform='rotate(9.486557444272353 121.5 287.5)'>
					<path
						fill={version}
						d='M53.2,107.9l-67.6-7.6l-11.2-67.1L42,40.8L53.2,107.9z M-10.9,96.5l59,6.7l-9.8-58.6l-59-6.7L-10.9,96.5z'
					/>
					<path
						fill={version}
						d='M64,96.5l-67.6-7.6l-11.2-67.1l67.6,7.6L64,96.5z M0,85.1l59,6.7l-9.8-58.6l-59-6.7L0,85.1z'
					/>
					<path
						fill={version}
						d='M42.4,119.2l-67.6-7.6l-11.2-67.1l67.6,7.6L42.4,119.2z M-21.6,107.8l59,6.7l-9.8-58.6l-59-6.7L-21.6,107.8z'
					/>
				</g>
			</g>
		</chakra.svg>
	)
}
