'use client'

import { useState } from 'react'
import Title from '@/components/Title/Title'
import Input from '@/components/Input/Input'
import Output from '@/components/Output/Output'
import Column from '@/components/Column/Column'
import Divider from '@/components/Divider/Divider'
import { hexaToDecimal } from '@/lib/convertions'
import Button from '@/components/Button/Button'

export default function HexaToDecimal() {
	const [num, setnum] = useState<string>('')

	const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		let { value } = e.target
		value = value.toLocaleUpperCase()

		const digits = [
			'0',
			'1',
			'2',
			'3',
			'4',
			'5',
			'6',
			'7',
			'8',
			'9',
			'A',
			'B',
			'C',
			'D',
			'E',
			'F',
		]
		let validInput = true

		for (const digit of value) {
			if (!digits.includes(digit)) {
				validInput = false
				break
			}
		}

		if (validInput) {
			setnum(value)
		}
	}

	const reset = () => {
		setnum('')
	}

	return (
		<>
			<Column width="200px">
				<Title value="Hexa to Decimal" />
			</Column>
			<Divider />
			<Column>
				<Input
					onChange={onChange}
					inputMode="text"
					value={num}
					placeholder="hexa..."
				/>
				<p>=</p>
				<Output value={hexaToDecimal(num)} />
			</Column>
			<Divider />
			<Button text="Reset" onClick={reset} />
		</>
	)
}
