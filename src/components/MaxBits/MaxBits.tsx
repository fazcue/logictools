import styles from './MaxBits.module.css'

interface Props {
	value: number
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function MaxBits({ value, onChange }: Props): JSX.Element {
	return (
		<div className={styles.container}>
			bits:
			<input
				type="number"
				min="2"
				max="16"
				value={value}
				onChange={onChange}
				className={styles.input}
			/>
		</div>
	)
}

export default MaxBits
