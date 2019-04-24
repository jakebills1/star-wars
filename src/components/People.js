import React, { useState, useEffect,} from 'react'
import axios from 'axios'

const People = () => {
	const [people, setPeople] = useState([]);
	useEffect( () => {
		axios.get("https://swapi.co/api/people/").then( res => setPeople(res.data.results))
	}, []
	)

	const renderPeople = () => (
		people.map( p => {
			return <li key={p.created}>{p.name}</li>
		}
		)
	)
	return (
		<div>
			<ul>
				{renderPeople()}
			</ul>
		</div>
	)
}
export default People;
