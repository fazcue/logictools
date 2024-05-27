import styles from './Row.module.css'

interface Props {
	children: React.ReactNode
}

function Row({ children }: Props): JSX.Element {
	return <div className={styles.container}>{children}</div>
}

export default Row
