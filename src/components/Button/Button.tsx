import styles from './Button.module.css'

interface Props {
	onClick: () => void
	text: string
	disabled?: boolean
}

function Button({ onClick, text, disabled = false }: Props): JSX.Element {
	return (
		<button
			className={styles.container}
			onClick={onClick}
			disabled={disabled}
		>
			{text}
		</button>
	)
}

export default Button
