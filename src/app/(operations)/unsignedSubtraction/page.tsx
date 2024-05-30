'use client'

import { useState } from 'react'
import Title from '@/components/Title/Title'
import Input from '@/components/Input/Input'
import Output from '@/components/Output/Output'
import Column from '@/components/Column/Column'
import Divider from '@/components/Divider/Divider'
import { unsignedSubtract } from '@/lib/subtractions'
import { binaryToDecimal } from '@/lib/convertions'
import Button from '@/components/Button/Button'

export default function UnsignedSubtraction() {
	const [num1, setnum1] = useState<string>('')
	const [num2, setnum2] = useState<string>('')

	const onChangeOne = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const { value } = e.target

		if (binaryToDecimal(value) < binaryToDecimal(num2)) {
			return
		}

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

		if (binaryToDecimal(num1) < binaryToDecimal(value)) {
			return
		}

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

	const reset = () => {
		setnum1('')
		setnum2('')
	}

	return (
		<>
			<Column width="200px">
				<Title value="Unsigned Subtraction" />
			</Column>
			<Divider />
			<Column>
				<Input
					onChange={onChangeOne}
					value={num1}
					placeholder="binary..."
				/>
				<p>-</p>
				<Input
					onChange={onChangeTwo}
					value={num2}
					placeholder="binary..."
					id="input2"
				/>
				<p>=</p>
				<Output value={unsignedSubtract(num1, num2)} />
			</Column>
			<Divider />
			<Button text="Reset" onClick={reset} />
		</>
	)
}
