import Column from '@/components/Column/Column'
import Divider from '@/components/Divider/Divider'
import HorizontalDivider from '@/components/HorizontalDivider/HorizontalDivider'

export default function Changelog() {
	return (
		<>
			<Column width="auto">
				<h1>Changelog</h1>
				<HorizontalDivider />
				<small>updated: 2024/05/30</small>
			</Column>
			<Divider />
			<Column width="auto">
				<>
					<h2>Add steps to</h2>
					<ul>
						<ol>Binary to Decimal</ol>
						<ol>Binary to Hexa</ol>
					</ul>
				</>
			</Column>
		</>
	)
}
