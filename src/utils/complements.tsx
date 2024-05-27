import { unsignedAdd } from '@/utils/additions'

export const onesComplement = (num: string): string => {
	let res = ''

	for (const digit of num) {
		if (digit === '1') {
			res += '0'
		} else {
			res += '1'
		}
	}

	return res
}

export const twosComplement = (num: string, bits?: number): string => {
	let res = ''

	if (bits) {
		if (num.length > bits) {
			return 'Error: bits insuficientes'
		}

		if (num.length < bits) {
			const diff = bits - num.length
			for (let i = 0; i < diff; i++) {
				num = '0' + num
			}
		}
	}

	res = onesComplement(num)
	res = unsignedAdd(res, '1')

	let diff: number = num.length - res.length

	if (diff > 0) {
		for (let i = 0; i < diff; i++) {
			res = '0' + res
		}
	} else if (diff < 0) {
		diff *= -1
		res = res.slice(diff)
	}

	return res
}
