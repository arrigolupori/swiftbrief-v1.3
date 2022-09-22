import { Fragment, ReactElement } from 'react'
import { ColumnsFooter } from 'ui/components/footers'
import { Box, Container } from '@chakra-ui/react'

export const getMainWebsiteLayout = (page: ReactElement) => {
	return (
		<Fragment>
			{page}
			<ColumnsFooter />
		</Fragment>
	)
}

export const getCenteredWebsiteLayout = (page: ReactElement) => {
	return (
		<Box
			bgGradient='linear(to-br, secondary.500, secondary.900)'
			height='100vh'
			py={{ base: '12', md: '24' }}
			px='6'
		>
			<Container maxW='md' p='8' bg='white' boxShadow='xl' borderRadius='xl'>
				{page}
			</Container>
		</Box>
	)
}
