import { defineConfig } from 'cypress'

export default defineConfig({
	projectId: 'i8dmnb',
	fixturesFolder: 'src/tests/cypress/fixtures',
	screenshotsFolder: 'src/tests/cypress/screenshots',
	videosFolder: 'src/tests/cypress/videos',
	downloadsFolder: 'src/tests/cypress/downloads',
	supportFolder: 'src/tests/cypress/support',

	component: {
		specPattern: 'src/ui/components/**/*.cy.{js,jsx,ts,tsx}',
		supportFile: 'src/tests/cypress/support/component.ts',
		indexHtmlFile: 'src/tests/cypress/support/component-index.html',
		devServer: {
			framework: 'next',
			bundler: 'webpack'
		}
	},

	e2e: {
		baseUrl: 'http://localhost:3000',
		specPattern: 'src/tests/e2e/**/*.cy.{js,jsx,ts,tsx}',
		supportFile: 'src/tests/cypress/support/e2e.ts',
		setupNodeEvents(on, config) {
			// implement node event listeners here
		}
	}
})
