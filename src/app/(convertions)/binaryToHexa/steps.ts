import { binaryToHexa } from '@/lib/convertions'
import { Step } from '@/lib/types'

const getStepOne = (num: string): Step => {
	// Step 1: Group digits into groups of 4, from right to left
	const step: Step = {
		text: 'Separate digits into groups of 4, from right to left',
		latex:
			`$${num}_2 = ` +
			num
				.split('')
				.reverse()
				.map((digit, index) => {
					if (index % 4 === 0) {
						return `${digit}_2\\,\\,`
					} else {
						return `${digit}`
					}
				})
				.reverse()
				.join('') +
			'$',
	}

	return step
}

const getStepTwo = (num: string): Step => {
	// Step 2: Add missing digits if needed to the first group
	let numWithMissingDigits = num
	while (numWithMissingDigits.length % 4 !== 0) {
		numWithMissingDigits = '0' + numWithMissingDigits
	}

	const step: Step = {
		text: 'Add missing digits if needed to the first group',
		latex:
			`$${num}_2 = ` +
			numWithMissingDigits
				.split('')
				.reverse()
				.map((digit, index) => {
					if (index % 4 === 0) {
						return `${digit}_2\\,\\,`
					} else {
						return `${digit}`
					}
				})
				.reverse()
				.join('') +
			'$',
	}

	return step
}

const getStepThree = (): Step => {
	const hexaBinary = [
		{
			hexa: '\\,\\,0',
			binary: '0000',
		},
		{
			hexa: '| \\,\\,\\, \\,\\,8',
			binary: '1000',
		},
		{
			hexa: '\\,\\,1',
			binary: '0001',
		},
		{
			hexa: '| \\,\\,\\, \\,\\,9',
			binary: '1001',
		},
		{
			hexa: '\\,\\,2',
			binary: '0010',
		},
		{
			hexa: '| \\,\\,\\, A',
			binary: '1010',
		},
		{
			hexa: '\\,\\,3',
			binary: '0011',
		},
		{
			hexa: '| \\,\\,\\, B',
			binary: '1011',
		},
		{
			hexa: '\\,\\,4',
			binary: '0100',
		},
		{
			hexa: '| \\,\\,\\, C',
			binary: '1100',
		},
		{
			hexa: '\\,\\,5',
			binary: '0101',
		},
		{
			hexa: '| \\,\\,\\, D',
			binary: '1101',
		},
		{
			hexa: '\\,\\,6',
			binary: '0110',
		},
		{
			hexa: '| \\,\\,\\, E',
			binary: '1110',
		},
		{
			hexa: '\\,\\,7',
			binary: '0111',
		},
		{
			hexa: '| \\,\\,\\, F',
			binary: '1111',
		},
	]

	const step: Step = {
		text: 'Identify each group in the table',
		latex: `$${hexaBinary
			.map(
				(hexa, index) =>
					`${hexa.hexa}_{16}: ${hexa.binary}_2 \\,\\,\\,  ${
						(index + 1) % 2 === 0 ? '\\newline' : ''
					}`
			)
			.join('')}$`,
	}

	return step
}

const getStepFour = (num: string, numWithMissingDigits: string): Step => {
	// Step 3: Convert each group of 4 digits to its corresponding hexadecimal digit
	let hexas = []
	let i = 0
	while (i < numWithMissingDigits.length) {
		hexas.push(binaryToHexa(numWithMissingDigits.slice(i, i + 4)))
		i = i + 4
	}

	const step: Step = {
		text: 'Replace with its corresponding hexadecimal digit',
		latex:
			`$${num}_2 = ` + hexas.map((hexa) => `${hexa}`).join('') + '_{16}$',
	}

	return step
}

export const explanation = (num: string): Step[] => {
	const stepOne = getStepOne(num)

	// Step 2: Add missing digits if needed to the first group
	let numWithMissingDigits = num
	while (numWithMissingDigits.length % 4 !== 0) {
		numWithMissingDigits = '0' + numWithMissingDigits
	}

	const stepTwo = getStepTwo(num)
	const stepThree = getStepThree()
	const stepFour = getStepFour(num, numWithMissingDigits)

	return [stepOne, stepTwo, stepThree, stepFour]
}
