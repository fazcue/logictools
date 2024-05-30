import styles from './Steps.module.css'
import 'katex/dist/katex.min.css'
import Latex from 'react-latex-next'
import { Step } from '@/lib/types'

interface Props {
	steps: Step[]
}

function Steps({ steps }: Props): JSX.Element {
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>Steps</h2>
			<div className={styles.steps}>
				{steps.map((step, index) => (
					<div className={styles.step} key={index}>
						<div className={styles.number}>{index + 1}</div>
						<div>
							<h3 className={styles.text}>{step.text}:</h3>
							<p>
								<Latex>{step.latex}</Latex>
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Steps
