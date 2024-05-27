'use client'

import { useState } from 'react'
import Title from '@/components/Title/Title'
import MaxBits from '@/components/MaxBits/MaxBits'
import Input from '@/components/Input/Input'
import Output from '@/components/Output/Output'
import Column from '@/components/Column/Column'
import Divider from '@/components/Divider/Divider'
import HorizontalDivider from '@/components/HorizontalDivider/HorizontalDivider'
import { signedMagnitudeAdd } from '@/utils/additions'

export default function SignedMagnitudeAddition() {
	const [num1, setnum1] = useState<string>('')
	const [num2, setnum2] = useState<string>('')
	const [bits, setbits] = useState<number>(6)

	const onChangeOne = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const { value } = e.target
		const digits = ['0', '1']
		let validInput = true

		for (const digit of value) {
			if (!digits.includes(digit)) {
				validInput = false
				break
			}
		}

		if (validInput) {
			setnum1(value)
		}
	}

	const onChangeTwo = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const { value } = e.target
		const digits = ['0', '1']
		let validInput = true

		for (const digit of value) {
			if (!digits.includes(digit)) {
				validInput = false
				break
			}
		}

		if (validInput) {
			setnum2(value)
		}
	}

	const onChangeBits = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const { value } = e.target

		if (+value < 2 || +value > 16) {
			return
		}

		setbits(+value)
	}

	return (
		<>
			<Column width="200px">
				<Title value="Signed Magnitude Addition" />
				<HorizontalDivider />
				<MaxBits value={bits} onChange={onChangeBits} />
			</Column>
			<Divider />
			<Column>
				<Input
					onChange={onChangeOne}
					value={num1}
					placeholder="binary..."
				/>
				<p>+</p>
				<Input
					onChange={onChangeTwo}
					value={num2}
					placeholder="binary..."
				/>
				<p>=</p>
				<Output value={signedMagnitudeAdd(num1, num2, bits)} />
			</Column>
		</>
	)
}
