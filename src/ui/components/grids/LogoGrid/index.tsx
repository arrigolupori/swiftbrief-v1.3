import {
	forwardRef,
	SimpleGridProps,
	useBreakpointValue
} from '@chakra-ui/react'
import { SimpleGrid, Img, Box } from '@chakra-ui/react'
import { ImageItem } from 'types/ui'

interface LogoGridProps extends SimpleGridProps {
	logos: ImageItem[]
}

export const LogoGrid = forwardRef<LogoGridProps, 'div'>(
	({ logos, columns, columnGap, rowGap, ...rest }, ref) => {
		const mobileBreakpoint = useBreakpointValue({ base: true, md: false })
		return (
			<SimpleGrid
				ref={ref}
				columns={mobileBreakpoint ? 2 : 3}
				columnGap={mobileBreakpoint ? 3 : 6}
				rowGap={mobileBreakpoint ? 4 : 8}
				{...rest}
			>
				{logos?.map((logo, index) => (
					<Box
						key={`key-${index}-${logo}`}
						p={mobileBreakpoint ? '0.25em' : '1em'}
						borderRadius='md'
						bgColor='secondary.200'
						shadow='md'
					>
						<Img
							src={logo.src}
							width={mobileBreakpoint ? '130px' : '220px'}
							height={mobileBreakpoint ? '65px' : '110px'}
							alt={logo.alt}
						/>
					</Box>
				))}
			</SimpleGrid>
		)
	}
)
