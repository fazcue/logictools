describe('Convertions', () => {
	beforeEach('should open the homepage', () => {
		cy.visit('http://localhost:3000/')
	})

	describe('BinaryToDecimal', () => {
		beforeEach('should open BinaryToDecimal page', () => {
			cy.contains('Binary to Decimal').click()
		})

		it('should convert binary to decimal', () => {
			const arr = [
				{
					input: '1010',
					output: '10',
				},
				{
					input: '1111',
					output: '15',
				},
				{
					input: '0000',
					output: '0',
				},
				{
					input: '0001',
					output: '1',
				},
				{
					input: '1110',
					output: '14',
				},
			]

			arr.forEach(({ input, output }) => {
				cy.get('#input1').type(input)
				cy.get('#output').should('have.text', output)
				cy.get('button').contains('Reset').click()
			})
		})

		it('should have steps explained', () => {
			cy.get('#input1').type('1010')
			cy.get('button').contains('Steps').click()
			cy.get('h2').should('have.text', 'Steps')
		})

		it('should update convertion', () => {
			cy.get('#input1').type('1010')
			cy.get('button').contains('Steps').click()
			cy.get('button').contains('Update').click()
			cy.contains('Binary to Decimal').should('be.visible')
		})

		it('should reset convertion', () => {
			cy.get('#input1').type('1010')
			cy.get('button').contains('Reset').click()
			cy.get('#input1').should('have.value', '')
			cy.get('#output').should('have.text', '0')
		})
	})
})
