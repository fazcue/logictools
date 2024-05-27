'use client'

import { useState } from 'react'
import Title from '@/components/Title/Title'
import Input from '@/components/Input/Input'
import Output from '@/components/Output/Output'
import Column from '@/components/Column/Column'
import Divider from '@/components/Divider/Divider'
import { unsignedAdd } from '@/utils/additions'

export default function UnsignedAddition() {
	const [num1, setnum1] = useState<string>('')
	const [num2, setnum2] = useState<string>('')

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

	return (
		<>
			<Column width="200px">
				<Title value="Unsigned Addition" />
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
				<Output value={unsignedAdd(num1, num2)} />
			</Column>
		</>
	)
}
