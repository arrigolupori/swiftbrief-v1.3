import React from 'react'

import { BaseLink } from '.'

describe('BaseLink', () => {
	it('mounts, says "Hello world, and clicks', () => {
		cy.mount(<BaseLink href='https://www.google.com'>Hello world</BaseLink>)
		cy.get('.chakra-link').should('have.text', 'Hello world').click()
	})
})
