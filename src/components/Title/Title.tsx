import styles from './Title.module.css'

interface Props {
	value: string
}

function Title({ value }: Props): JSX.Element {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>{value}</h1>
		</div>
	)
}

export default Title
