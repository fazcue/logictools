import { binaryToDecimal } from './convertions'
import { signedMagnitudeAdd } from './additions'

export const unsignedSubtract = (
	num1: string,
	num2: string,
	withZeros: boolean = false
): string => {
	let carry: number = 0
	let res: string = ''

	let decNum1 = binaryToDecimal(num1)
	let decNum2 = binaryToDecimal(num2)

	if (decNum1 < decNum2) {
		const aux = num1
		num1 = num2
		num2 = aux
	}

	let iNum2: number = num2.length - 1

	for (const n1 of [...num1].reverse()) {
		const n2: string = iNum2 >= 0 ? num2[iNum2] : '0'

		let sub: number = 0 - carry

		if (n1 === '1' && n2 === '1' && carry === 1) {
			sub = 3
		} else if (n1 === '1' && n2 === '0') {
			sub += 1
		} else if (n1 === '0' && n2 === '1') {
			sub += 2
		}

		switch (sub) {
			case 0:
				res = '0' + res
				carry = 0
				break
			case 1:
				res = '1' + res
				carry = 0
				break
			case 2:
				res = '1' + res
				carry = 1
				break
			case 3:
				res = '1' + res
				carry = 1
				break
		}

		iNum2 -= 1
	}

	if (withZeros) {
		return res
	}

	return `${+res}`
}

export const signedMagnitudeSubtract = (
	num1: string,
	num2: string,
	bits?: number
): string => {
	const sign2: string = num2[0] === '0' ? '1' : '0'
	num2 = sign2 + num2.slice(1)

	const res = signedMagnitudeAdd(num1, num2, bits)

	return res
}
