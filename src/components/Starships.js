import React, {useState, useEffect,} from 'react'
import axios from 'axios'

const Starships = ({ urlArr, }) => {
	const [starships, setStarships] = useState([])
	
	useEffect( () => {
		urlArr.map( url => axios.get(url).then(res => setStarships(starships, {...res.data})))
	}, []
	)

	return (
		<p></p>
	)
}
export default Starships;
