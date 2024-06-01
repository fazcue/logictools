import styles from './List.module.css'
import { Card as CardType } from '@/lib/types'
import Card from '@/components/Card/Card'

interface Props {
	items: CardType[]
}

function List({ items }: Props): JSX.Element {
	return (
		<div className={styles.container}>
			{items.map((item) => (
				<Card
					key={item.title}
					title={item.title}
					url={item.link}
					dataText={item.steps ? 'with steps!' : ''}
				/>
			))}
		</div>
	)
}

export default List
