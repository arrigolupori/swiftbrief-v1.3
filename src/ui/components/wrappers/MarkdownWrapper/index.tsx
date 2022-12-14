import { useExternalUrls } from 'ui/hooks'
import { Container, ContainerProps, forwardRef } from '@chakra-ui/react'

export const MarkdownWrapper = forwardRef<ContainerProps, 'div'>(
	(props, ref) => {
		useExternalUrls()
		return (
			<Container {...props} ref={ref}>
				{props.children}
			</Container>
		)
	}
)

MarkdownWrapper.defaultProps = {
	className: 'markdown',
	p: '2em 1em 3em 1em'
} as ContainerProps
