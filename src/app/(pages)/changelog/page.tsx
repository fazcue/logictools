import Column from '@/components/Column/Column'
import Divider from '@/components/Divider/Divider'
import HorizontalDivider from '@/components/HorizontalDivider/HorizontalDivider'

export default function Changelog() {
	return (
		<>
			<Column width="auto">
				<h1>Last update</h1>
				<HorizontalDivider />
				<small>updated: 2024/05/31</small>
			</Column>
			<Divider />
			<Column width="auto">
				<ul>
					<ol>Two`s Complement Addition</ol>
					<ol>Two`s Complement Subtraction</ol>
				</ul>
			</Column>
		</>
	)
}
