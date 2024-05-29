import styles from './Output.module.css'
import { toast } from 'react-toastify'

interface Props {
	value: number | string
}

function Output({ value }: Props): JSX.Element {
	const onClick = () => {
		navigator.clipboard.writeText(value === '' ? '0' : `${value}`)
		toast('🗐 copied to clipboard', {
			position: 'bottom-right',
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: true,
			progress: undefined,
			theme: 'dark',
			toastId: 'copied',
			progressStyle: { background: 'salmon' },
		})
	}

	return (
		<div className={styles.container}>
			<p id="output" onClick={onClick}>
				{value === '' ? '0' : value}
			</p>
		</div>
	)
}

export default Output
