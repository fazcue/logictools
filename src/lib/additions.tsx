import { unsignedSubtract } from './subtractions'

export const unsignedAdd = (num1: string, num2: string): string => {
	let carry: number = 0
	let res: string = ''

	num1 = `${+num1}`
	num2 = `${+num2}`

	if (num1.length < num2.length) {
		const aux = num1
		num1 = num2
		num2 = aux
	}

	let iNum2: number = num2.length - 1

	for (const n1 of [...num1].reverse()) {
		const n2: string = iNum2 >= 0 ? num2[iNum2] : '0'

		let sum: number = 0 + carry

		if ((n1 === '0' && n2 === '1') || (n1 === '1' && n2 === '0')) {
			sum += 1
		} else if (n1 === '1' && n2 === '1') {
			sum += 2
		}

		switch (sum) {
			case 0:
				res = '0' + res
				carry = 0
				break
			case 1:
				res = '1' + res
				carry = 0
				break
			case 2:
				res = '0' + res
				carry = 1
				break
			case 3:
				res = '1' + res
				carry = 1
				break
		}

		iNum2 -= 1
	}

	if (carry === 1) {
		res = '1' + res
	}

	return `${+res}`
}

export const signedMagnitudeAdd = (
	num1: string,
	num2: string,
	bits?: number
): string => {
	if (num1 && num2) {
		let res: string = ''

		const sign1: string = num1[0]
		const sign2: string = num2[0]

		const magnitude1: string = num1.slice(1)
		const magnitude2: string = num2.slice(1)

		if (sign1 === sign2) {
			res = unsignedAdd(magnitude1, magnitude2)
			res = sign1 + res

			if (bits && res.length < bits) {
				while (res.length < bits) {
					res = '0' + res
				}
			}
		} else {
			res = unsignedSubtract(magnitude1, magnitude2, true)

			const maxSign = Math.max(+sign1, +sign2)
			res = maxSign + res
		}

		if (bits && res.length > bits) {
			return 'not enough bits'
		}

		return res
	}

	return '0'
}
