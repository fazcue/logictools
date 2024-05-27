import styles from './Input.module.css'

interface Props {
	type?: 'text' | 'number'
	inputMode?: 'numeric' | 'text'
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	value: string | number
	placeholder: string
	disabled?: boolean
	readonly?: boolean
}

function Input({
	type = 'text',
	inputMode = 'numeric',
	onChange,
	value,
	placeholder,
	disabled = false,
	readonly = false,
}: Props): JSX.Element {
	return (
		<input
			type={type}
			value={value}
			onChange={onChange}
			className={styles.input}
			placeholder={placeholder}
			disabled={disabled}
			readOnly={readonly}
			inputMode={inputMode}
		/>
	)
}

export default Input
