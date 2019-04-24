import React, {useState, useEffect,} from 'react'
import axios from 'axios'
import Info from './Info'
import {Button, Icon,} from 'semantic-ui-react'

const Planet = ({ url, }) => {
	const [planet, setPlanet] = useState({})
	const [showInfo, setShowInfo] = useState(false);
	useEffect( () => {
		axios.get(url).then( res => setPlanet({...res.data}))
	}, []
	)

	return (
		<>
			<div style={{ display: "flex", justifyContent: "space-between"}}>
				<p >Homeworld: {planet.name}</p>
				<Button icon color="green" onClick={() => setShowInfo(!showInfo)}>
					<Icon name={showInfo ? "minus" : "plus"} />
				</Button>
			</div>
			{ showInfo && <Info planet={planet}/> }
		</>
	)
}
export default Planet;
