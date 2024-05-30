import styles from './Column.module.css'

interface Props {
	children: React.ReactNode
	width?: '200px' | '400px' | '600px' | '800px' | 'auto'
}

function Column({ children, width = '600px' }: Props): JSX.Element {
	return (
		<div className={styles.container} style={{ width }}>
			{children}
		</div>
	)
}

export default Column
