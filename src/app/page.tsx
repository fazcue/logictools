import Row from '@/components/Row/Row'
import List from '@/components/List/List'
import { convertionsList, complementsList, operationsList } from '@/lib/data'
import Column from '@/components/Column/Column'
import Title from '@/components/Title/Title'
import Divider from '@/components/Divider/Divider'

export default function Home() {
	return (
		<>
			<Column width="auto">
				<Title value="Logic Tol" />
			</Column>
			<Divider />
			<Column width="800px">
				<List
					items={[
						...convertionsList,
						...complementsList,
						...operationsList,
					]}
				/>
			</Column>
			<Divider />
		</>
	)
}
