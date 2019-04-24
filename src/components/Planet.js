import React, {useState, useEffect,} from 'react'
import axios from 'axios'

const Planet = ({ url, }) => {
	const [planet, setPlanet] = useState({})
	
	useEffect( () => {
		axios.get(url).then( res => setPlanet({...res.data}))
	}, []
	)

	return (
		<p>Homeworld: {planet.name}</p>
	)
}
export default Planet;
