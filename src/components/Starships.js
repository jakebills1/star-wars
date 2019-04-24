import React, {useState, useEffect,} from 'react'
import axios from 'axios'
import Starship from './Starship'

const Starships = ({ urlArr, }) => {
	const [starships, setStarships] = useState(urlArr)
	
	const renderShips = () => {
		return starships.map( url => {
			return <Starship url={url} />
		})
	}

	return (
		<>
			{renderShips()}
		</>
	)
}
export default Starships;
