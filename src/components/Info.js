import React from 'react'
import {Card, Image, } from 'semantic-ui-react'
import Earth from '../earth.jpg'

const Info = ({ planet: { name, climate, terrain, population, gravity, }}) => {
	


	return (
		<Card>
			<Card.Content>
				<Card.Header>{name}</Card.Header>
				<Image src={Earth} />
			</Card.Content>
			<Card.Content extra>
				<div>Climate: {climate}</div>
				<div>Terrain: {terrain}</div>
				<div>Population: {population}</div>
				<div>Gravity: {gravity}</div>
			</Card.Content>
		</Card>
	)

}

export default Info;
