'use client'

import { useState } from 'react'
import Title from '@/components/Title/Title'
import Input from '@/components/Input/Input'
import Output from '@/components/Output/Output'
import Column from '@/components/Column/Column'
import Divider from '@/components/Divider/Divider'
import { binaryToDecimal } from '@/utils/convertions'
import Reset from '@/components/Reset/Reset'

export default function BinaryToDecimal() {
	const [num, setnum] = useState<string>('')

	const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
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
			setnum(value)
		}
	}

	const reset = () => {
		setnum('')
	}

	return (
		<>
			<Column width="200px">
				<Title value="Binary to Decimal" />
			</Column>
			<Divider />
			<Column>
				<Input
					onChange={onChange}
					value={num}
					placeholder="binary..."
				/>
				<p>=</p>
				<Output value={binaryToDecimal(num)} />
			</Column>
			<Divider />
			<Reset onClick={reset} />
		</>
	)
}
