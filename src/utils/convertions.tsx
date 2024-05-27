export const binaryToDecimal = (num: string): number => {
	let res: number = 0
	let exp: number = num.length - 1

	for (const digit of num) {
		res += +digit * Math.pow(2, exp)
		exp--
	}

	return res
}

export const decimalToBinary = (num: number): string => {
	let res = ''

	while (num > 0) {
		res = (num % 2) + res
		num = Math.floor(num / 2)
	}

	return res
}

export const binaryToHexa = (num: string): string => {
	const missingDigits: number = 4 - (num.length % 4)

	if (missingDigits !== 0 && missingDigits !== 4) {
		for (let i = 0; i < missingDigits; i++) {
			num = '0' + num
		}
	}

	const hexa: string[] = ['A', 'B', 'C', 'D', 'E', 'F']
	let res: string = ''

	for (let i = 0; i < num.length; i += 4) {
		const binaryPart: string = num.slice(i, i + 4)
		const decimal: number = binaryToDecimal(binaryPart)

		if (decimal > 9) {
			res += hexa[decimal - 10]
		} else {
			res += `${decimal}`
		}
	}

	return res
}

export const hexaToBinary = (num: string): string => {
	let res: string = ''
	const hexa: string[] = ['A', 'B', 'C', 'D', 'E', 'F']

	for (const digit of num) {
		let binary: string = ''

		if (hexa.includes(digit)) {
			const index = hexa.indexOf(digit)
			binary = decimalToBinary(10 + index)
		} else {
			binary = decimalToBinary(+digit)

			while (binary.length < 4) {
				binary = '0' + binary
			}
		}

		res += binary
	}

	return res
}

export const hexaToDecimal = (num: string): number => {
	let res: number = 0
	let exp: number = num.length - 1

	const hexa: string[] = ['A', 'B', 'C', 'D', 'E', 'F']

	for (const digit of num) {
		if (hexa.includes(digit)) {
			const decimal = hexa.indexOf(digit) + 10
			res += decimal * Math.pow(16, exp)
		} else {
			res += +digit * Math.pow(16, exp)
		}

		exp--
	}

	return res
}
