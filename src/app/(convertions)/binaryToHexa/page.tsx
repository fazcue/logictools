'use client'

import { useState } from 'react'
import Title from '@/components/Title/Title'
import Input from '@/components/Input/Input'
import Output from '@/components/Output/Output'
import Column from '@/components/Column/Column'
import Divider from '@/components/Divider/Divider'
import { binaryToHexa } from '@/lib/convertions'
import Actions from '@/components/Actions/Actions'
import Steps from '@/components/Steps/Steps'
import { Step } from '@/lib/types'
import { explanation } from './steps'

export default function BinaryToHexa() {
	const [num, setnum] = useState<string>('')
	const [steps, setSteps] = useState<Step[]>([])
	const [showInfo, setShowInfo] = useState<boolean>(false)

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
		setShowInfo(false)
	}

	const explain = () => {
		if (!num) return

		const newSteps = explanation(num)
		setSteps(newSteps)
	}

	const toggleInfo = () => {
		explain()
		setShowInfo(!showInfo)
	}

	return (
		<>
			<Column width="200px">
				<Title value="Binary to Hexa" />
			</Column>
			<Divider />
			<Column>
				{showInfo ? (
					<Steps steps={steps} />
				) : (
					<>
						<Input
							onChange={onChange}
							value={num}
							placeholder="binary..."
						/>
						<p>=</p>
						<Output value={binaryToHexa(num)} />
					</>
				)}
			</Column>
			<Divider />
			<Column width="auto">
				<Actions
					num={num}
					showInfo={showInfo}
					toggleInfo={toggleInfo}
					reset={reset}
				/>
			</Column>
		</>
	)
}
