// Step 1: Multiply each digit by the corresponding power of 2
import { Step } from '@/lib/types'
import { binaryToDecimal } from '@/lib/convertions'

const getStepOne = (num: string): Step => {
	return {
		text: 'Multiply each digit by the corresponding power of 2',
		latex:
			`$${num}_2 = ` +
			num
				.split('')
				.map(
					(digit, index) =>
						`${digit} \\cdot 2^{${num.length - index - 1}}`
				)
				.join(' + ') +
			'$',
	}
}

const getStepTwo = (num: string): Step => {
	return {
		text: 'Sum all digits',
		latex: `$${num}_2 = ${binaryToDecimal(num)}_{10}$`,
	}
}

export const explanation = (num: string): Step[] => {
	const stepOne = getStepOne(num)
	const stepTwo = getStepTwo(num)

	return [stepOne, stepTwo]
}
