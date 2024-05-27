import Card from '@/components/Card/Card'
import Row from '@/components/Row/Row'

export default function Home() {
	return (
		<div>
			<h1>Hi</h1>
			<br />
			<h2>Convertions</h2>
			<Row>
				<Card title="Binary to Decimal" url="/binaryToDecimal" />
				<Card title="Decimal to Binary" url="/decimalToBinary" />
				<Card title="Binary to Hexa" url="/binaryToHexa" />
				<Card title="Hexa to Binary" url="/hexaToBinary" />
				<Card title="Hexa to Decimal" url="/hexaToDecimal" />
			</Row>
			<br />
			<h2>Complements</h2>
			<Row>
				<Card title="One's Complement" url="/onesComplement" />
				<Card title="Two's Complement" url="/twosComplement" />
			</Row>
			<br />
			<h2>Operations</h2>
			<Row>
				<Card title="Unsigned Addition" url="/unsignedAddition" />
				<Card title="Unsigned Subtraction" url="/unsignedSubtraction" />
				<Card
					title="Signed Magnitude Addition"
					url="/signedMagnitudeAddition"
				/>
			</Row>
		</div>
	)
}
