import styles from './Card.module.css'
import Link from 'next/link'

interface Props {
	title: string
	url: string
}

function Card({ title, url }: Props): JSX.Element {
	return (
		<div className={styles.container}>
			<Link href={url}>
				<h3 className={styles.title}>{title}</h3>
			</Link>
		</div>
	)
}

export default Card
