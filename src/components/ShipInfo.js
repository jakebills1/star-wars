import React from 'react'
import { Card, Image,} from 'semantic-ui-react'
import Pic from '../ywing_art.jpg'

const ShipInfo = ({ starship: { manufacturer, starship_class, model, passengers, name }}) => {

	return (
		<Card>
			<Card.Content>
				<Card.Header>{name}</Card.Header>
				<Image src={Pic} />
			</Card.Content>
			<Card.Content extra>
				<div>Model: {model}</div>
				<div>Manufacturer: {manufacturer}</div>
				<div>Starship class: {starship_class}</div>
				<div>Passenger capacity: {passengers}</div>
			</Card.Content>
		</Card>
	)
}

export default ShipInfo;
