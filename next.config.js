const withMDX = require('@next/mdx')({
	extension: /\.mdx?$/,
	options: {
		remarkPlugins: [],
		rehypePlugins: []
	}
})

module.exports = withMDX({
	pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
	images: {
		domains: [
			'swiftbrief-cms.nyc3.digitaloceanspaces.com',
			'lh3.googleusercontent.com'
		]
	},
	swcMinify: true
})
