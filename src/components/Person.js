import React, { useState, } from 'react'
import {Segment, Button, Icon, } from 'semantic-ui-react'
import Species from './Species'
import Planet from './Planet'
import Starships from './Starships'

const Person = ({ name, species, homeworld, starships, }) => {
	const [showMore, setShowMore] = useState(false)
	return (
		<>
			<Segment>
				<div style={{display: "flex", justifyContent: "space-between"}}>
					<div>{name}</div>
					<Button icon color="green" onClick={() => setShowMore(!showMore)}>
						<Icon name={showMore ? "minus" : "plus"} />
					</Button>
				</div>
			</Segment>
			{ showMore &&
				<Segment.Group>
					<Segment><Species url={species}/></Segment>
					<Segment><Planet url={homeworld} /></Segment>
					<Segment>Starships used: <Segment.Group> <Starships urlArr={starships}/></Segment.Group></Segment>
				</Segment.Group>
			}
		</>
	)
}
export default Person;
