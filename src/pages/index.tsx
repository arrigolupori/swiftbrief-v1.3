import {
	Stack,
	Box,
	useBreakpointValue,
	SimpleGrid,
	Heading,
	Text,
	VStack,
	useColorModeValue
} from '@chakra-ui/react'
import { homeMeta } from 'data/meta'
import { benefits, logos, stats, userTestimonials } from 'data/sales'
import { Fragment } from 'react'
import { NextPageWithLayout } from 'types/ui'
import {
	Meta,
	TestimonialSingle,
	BenefitSingle,
	LogoGrid,
	SimpleCta
} from 'ui/components'
import {
	getDirectoryWebsiteLayout,
	getMainWebsiteLayout
} from 'ui/layouts/website'

const Home: NextPageWithLayout = () => {
	const mobileBreakpoint = useBreakpointValue({ base: true, md: false })
	const lighterBlueToDarkGray = useColorModeValue(
		'secondary.300',
		'primary.400'
	)
	return (
		<Fragment>
			<Meta {...homeMeta} />
			<Heading
				as='h1'
				fontSize={{ base: '2xl', md: '5xl' }}
				lineHeight='1.2em'
				maxW='2xl'
			>
				Create high quality content briefs in 5 mins
			</Heading>
			<Text fontSize={{ base: 'md', md: '2xl' }} py='2' maxW='xl'>
				Swiftbrief is the brief generation engine that helps you scale your
				content marketing efforts
			</Text>
			<LogoGrid logos={logos} py='1em' />
			<SimpleGrid
				columns={{ base: 1, lg: 3 }}
				rowGap={{ base: 10, md: 16 }}
				columnGap={8}
				py='20'
			>
				{benefits.map((perk, index) => (
					<BenefitSingle
						key={`key-${index}-${perk.title}`}
						icon={perk.icon}
						title={perk.title}
						description={perk.description}
					/>
				))}
			</SimpleGrid>
			<Heading size='lg'>Why Swiftbrief?</Heading>
			<Text fontSize={{ base: 'md', md: 'xl' }} maxW='3xl' pb='10'>
				Researching and creating high quality content at scale takes a lot of
				time. Swiftbrief does all of the heavy lifting for you.
			</Text>
			<SimpleGrid columns={2} columnGap='8' rowGap='10'>
				{stats.map((stat, index) => (
					<Box
						bgColor={lighterBlueToDarkGray}
						key={`key-${index}-${stat.description}`}
						px='6'
						py='6'
						borderRadius='md'
						shadow='md'
					>
						<VStack spacing='1'>
							<Heading size='lg'>{stat.number}</Heading>
							<Text
								color='on-accent-muted'
								fontSize={{ base: 'md', md: 'lg' }}
								fontWeight='medium'
							>
								{stat.description}
							</Text>
						</VStack>
					</Box>
				))}
			</SimpleGrid>
			<Stack
				py='10'
				direction={mobileBreakpoint ? 'column' : 'row'}
				maxW='1100px'
				mx='auto'
			>
				{userTestimonials.map((customer, index) => (
					<TestimonialSingle
						key={`key-${index}-${customer.name}`}
						testimonial={customer.testimonial}
						name={customer.name}
						jobTitle={customer.jobTitle}
						src={customer.src}
					/>
				))}
			</Stack>
			<SimpleCta
				title='Delegate content at scale'
				description='Swiftbrief makes it easy to create and manage all your content
									briefs in one place'
				ctaText='Get a free 7-day trial'
				ctaPerk='No credit card required'
				ctaLinkOrFx='/register'
			/>
		</Fragment>
	)
}

Home.getLayout = getDirectoryWebsiteLayout

export default Home
