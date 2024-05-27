'use client'

import { useState } from 'react'
import Title from '@/components/Title/Title'
import Input from '@/components/Input/Input'
import Output from '@/components/Output/Output'
import Column from '@/components/Column/Column'
import Divider from '@/components/Divider/Divider'
import { decimalToBinary } from '@/utils/convertions'

export default function DecimalToBinary() {
	const [num, setnum] = useState<string>('')

	const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const { value } = e.target

		let validInput = true

		for (const digit of value) {
			if (isNaN(+digit)) {
				validInput = false
				break
			}
		}

		if (validInput) {
			setnum(value)
		}
	}

	return (
		<>
			<Column width="200px">
				<Title value="Decimal to Binary" />
			</Column>
			<Divider />
			<Column>
				<Input
					onChange={onChange}
					value={num}
					placeholder="decimal..."
				/>
				<p>=</p>
				<Output value={decimalToBinary(+num)} />
			</Column>
		</>
	)
}
