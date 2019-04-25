import React, {useState, } from 'react'
import Starship from './Starship'

const Starships = ({ urlArr, }) => {
	const [starships, ] = useState(urlArr)
	
	const renderShips = () => {
		return starships.map( url => {
			return <Starship url={url} />
		})
	}

	return (
		<>
			{ starships.length > 0 ? renderShips() : <div>None</div>}
		</>
	)
}
export default Starships;
