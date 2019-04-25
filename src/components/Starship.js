import React, { useState, useEffect, } from 'react'
import { Segment, Button, Icon, } from 'semantic-ui-react';
import axios from 'axios'
import ShipInfo from './ShipInfo'

const Starship = ({ url, }) => {
	const [starship, setStarship] = useState({})
	const [showInfo, setShowInfo] = useState(false);

	useEffect( () => {
			axios.get(url).then( res => setStarship(res.data))
		}
	)

	return (
		<Segment>
			<div style={{ display: "flex", justifyContent: "space-between", }}>
				<span>{starship.name}</span>
				<Button icon color="green" onClick={() => setShowInfo(!showInfo)}>
					<Icon name={showInfo ? "minus" : "plus"} />
				</Button>
			</div>
			{ showInfo && <ShipInfo starship={starship} /> }
		</Segment>
	)
}
export default Starship;
