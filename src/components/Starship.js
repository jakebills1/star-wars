import React, { useState, useEffect, } from 'react'
import { Segment,} from 'semantic-ui-react';
import axios from 'axios'

const Starship = ({ url, }) => {
	const [starship, setStarship] = useState({})

	useEffect( () => {
			axios.get(url).then( res => setStarship(res.data))
		}
	)

	return (
		<Segment>
			{starship.name}
		</Segment>
	)
}
export default Starship;
