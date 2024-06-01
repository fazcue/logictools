import { Card } from '@/lib/types'

export const convertionsList: Card[] = [
	{
		title: 'Binary to Decimal',
		link: '/binaryToDecimal',
		steps: true,
	},
	{
		title: 'Decimal to Binary',
		link: '/decimalToBinary',
		steps: false,
	},
	{
		title: 'Binary to Hexa',
		link: '/binaryToHexa',
		steps: true,
	},
	{
		title: 'Hexa to Binary',
		link: '/hexaToBinary',
		steps: false,
	},
	{
		title: 'Hexa to Decimal',
		link: '/hexaToDecimal',
		steps: false,
	},
]

export const complementsList: Card[] = [
	{
		title: "One's Complement",
		link: '/onesComplement',
		steps: false,
	},
	{
		title: "Two's Complement",
		link: '/twosComplement',
		steps: false,
	},
]

export const operationsList: Card[] = [
	{
		title: 'Unsigned Addition',
		link: '/unsignedAddition',
		steps: false,
	},
	{
		title: 'Unsigned Subtraction',
		link: '/unsignedSubtraction',
		steps: false,
	},
	{
		title: 'Signed Magnitude Addition',
		link: '/signedMagnitudeAddition',
		steps: false,
	},
	{
		title: 'Signed Magnitude Subtraction',
		link: '/signedMagnitudeSubtraction',
		steps: false,
	},
	{
		title: "Two's Complement Addition",
		link: '/twosComplementAddition',
		steps: false,
	},
	{
		title: "Two's Complement Subtraction",
		link: '/twosComplementSubtraction',
		steps: false,
	},
]
