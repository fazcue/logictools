import styles from './Reset.module.css'

interface Props {
	onClick: () => void
}

function Reset({ onClick }: Props): JSX.Element {
	return (
		<div className={styles.container} onClick={onClick}>
			Reset
		</div>
	)
}

export default Reset
