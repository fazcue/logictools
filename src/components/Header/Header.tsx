import styles from './Header.module.css'
import Link from 'next/link'

function Header() {
	return (
		<div className={styles.container}>
			<Link href="/" className={styles.item}>
				Home
			</Link>
			<Link href="/changelog" className={styles.item}>
				Changelog
			</Link>
		</div>
	)
}

export default Header
