import React from 'react'
import {Card, } from 'semantic-ui-react'

const Info = (props) => {
	


	return (
		<Card>
			<Card.Content>
				<Card.Header>{props.planet.name}</Card.Header>
			</Card.Content>
		</Card>
	)

}

export default Info;
