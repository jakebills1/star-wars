import React, { useState, useEffect,} from 'react'
import axios from 'axios'
import { Segment, Container, } from 'semantic-ui-react';
import Person from './Person'

const People = () => {
	const [people, setPeople] = useState([]);
	useEffect( () => {
		axios.get("https://swapi.co/api/people/").then( res => setPeople(res.data.results))
	}, []
	)

	const renderPeople = () => (
		people.map( p => {
			return (
				<Person
					name={p.name}
					species={p.species}
					homeworld={p.homeworld}
					starships={p.starships}
				/>
			)
		}
		)
	)

	return (
		<Container style={{ marginTop: "20px", }}>
			<Segment.Group>
				{renderPeople()}
			</Segment.Group>
		</Container>
	)
}
export default People;
