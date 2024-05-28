describe('Convertions', () => {
	beforeEach('should open the homepage', () => {
		cy.visit('http://localhost:3000/')
	})

	describe('BinaryToDecimal', () => {
		beforeEach('should click on binaryTodecimal', () => {
			cy.contains('Binary to Decimal').click()
		})

		it('should convert binary to decimal', () => {
			cy.get('#input1').type('1010')
			cy.get('#output').should('have.text', '10')
		})
	})
})
