import styles from './Header.module.css'
import Link from 'next/link'

function Header() {
	return (
		<div className={styles.container}>
			<Link href="/">Numbers</Link>
		</div>
	)
}

export default Header
