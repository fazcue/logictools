import styles from './Card.module.css'
import Link from 'next/link'

interface Props {
	title: string
	url: string
	dataText?: string
}

function Card({ title, url, dataText = '' }: Props): JSX.Element {
	return (
		<Link
			href={url}
			className={`${styles.container}${
				dataText && ' ' + styles.borderText
			}`}
			data-text={dataText}
		>
			<h3 className={styles.title}>{title}</h3>
		</Link>
	)
}

export default Card
