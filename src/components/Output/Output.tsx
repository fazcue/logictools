import styles from './Output.module.css'

interface Props {
	value: number | string
}

function Output({ value }: Props): JSX.Element {
	return (
		<div className={styles.container}>
			<p id="output">{value === '' ? '0' : value}</p>
		</div>
	)
}

export default Output
