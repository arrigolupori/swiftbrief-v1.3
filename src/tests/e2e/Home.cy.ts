describe('Home', () =>
	it('should present "Hello world"', () => {
		cy.visit('/').get('h1').contains('Hello world')
	}))

export {}
