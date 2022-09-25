import {
	Heading,
	Text,
	Stack,
	useBreakpointValue,
	SimpleGrid,
	useDisclosure,
	Modal,
	ModalCloseButton,
	ModalContent,
	ModalOverlay
} from '@chakra-ui/react'
import { pricingMeta } from 'data/meta'
import { customerTestimonials, perks } from 'data/sales'
import { Fragment } from 'react'
import { NextPageWithLayout } from 'types/ui'
import {
	BenefitSingle,
	Meta,
	SimpleCta,
	TestimonialSingle
} from 'ui/components'
import { getDirectoryWebsiteLayout } from 'ui/layouts/website'
import { InlineWidget } from 'react-calendly'

const Pricing: NextPageWithLayout = () => {
	const mobileBreakpoint = useBreakpointValue({ base: true, md: false })
	const demoModal = useDisclosure()
	return (
		<Fragment>
			<Meta {...pricingMeta} />
			<Heading as='h1' fontSize={{ base: '2xl', md: '5xl' }} lineHeight='1.2'>
				3 simple plans
			</Heading>
			<Text fontSize={{ base: 'md', md: '2xl' }} mt='4' maxW='xl'>
				For busy content marketers and editors
			</Text>
			<Stack
				direction={mobileBreakpoint ? 'column' : 'row'}
				maxW='1100px'
				mx='auto'
			>
				{customerTestimonials.map((customer, index) => (
					<TestimonialSingle
						key={`key-${index}-${customer.name}`}
						testimonial={customer.testimonial}
						name={customer.name}
						jobTitle={customer.jobTitle}
						src={customer.src}
					/>
				))}
			</Stack>
			<Heading as='h3' mt='2em'>
				All plans include
			</Heading>
			<SimpleGrid
				columns={{ base: 1, lg: 3 }}
				rowGap={{ base: 10, md: 16 }}
				columnGap={8}
				py='20'
			>
				{perks.map((perk, index) => (
					<BenefitSingle
						key={`key-${index}-${perk.title}`}
						icon={perk.icon}
						title={perk.title}
						description={perk.description}
					/>
				))}
			</SimpleGrid>
			<SimpleCta
				title='Prefer to see a live demo?'
				description="No problem! Schedule a 30-min demo call and I'll take you through the functionality."
				ctaText='Schedule a demo'
				ctaPerk='Flexible times'
				ctaLinkOrFx={() => demoModal.onOpen()}
				modal
			/>
			<Modal isOpen={demoModal.isOpen} onClose={demoModal.onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalCloseButton />
					<InlineWidget url='https://calendly.com/arrigo-lupori/swiftbrief-30-min-demo' />
				</ModalContent>
			</Modal>
		</Fragment>
	)
}

Pricing.getLayout = getDirectoryWebsiteLayout

export default Pricing
