import styles from './Card.module.css'
import Link from 'next/link'

interface Props {
	title: string
	url: string
}

function Card({ title, url }: Props): JSX.Element {
	return (
		<Link href={url}>
			<div className={styles.container}>
				<h3 className={styles.title}>{title}</h3>
			</div>
		</Link>
	)
}

export default Card
