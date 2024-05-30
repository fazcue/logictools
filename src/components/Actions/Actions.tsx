import styles from './Actions.module.css'
import Button from '@/components/Button/Button'

interface Props {
	num: string
	showInfo: boolean
	toggleInfo: () => void
	reset: () => void
}

function Actions({ num, showInfo, toggleInfo, reset }: Props): JSX.Element {
	return (
		<div className={styles.container}>
			<Button text="Reset" onClick={reset} disabled={!num} />
			<Button
				text={showInfo ? 'Update' : 'Steps'}
				onClick={toggleInfo}
				disabled={!num}
			/>
		</div>
	)
}

export default Actions
