import React, { useState, useEffect,} from 'react'
import axios from 'axios'
import { Segment, Container, } from 'semantic-ui-react';
import Planet from './Planet'
import Species from './Species'
import Starships from './Starships'

const People = () => {
	const [people, setPeople] = useState([]);
	useEffect( () => {
		axios.get("https://swapi.co/api/people/").then( res => setPeople(res.data.results))
	}, []
	)

	const renderPeople = () => (
		people.map( p => {
			return (
				<>
					<Segment key={p.created}>{p.name}</Segment>
					<Segment.Group>
						<Segment><Species url={p.species}/></Segment>
						<Segment><Planet url={p.homeworld} /></Segment>
						<Segment><Starships urlArr={p.starships}/></Segment>
					</Segment.Group>
				</>
			)
		}
		)
	)

	return (
		<Container>
			<Segment.Group>
				{renderPeople()}
			</Segment.Group>
		</Container>
	)
}
export default People;
