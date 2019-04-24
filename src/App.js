import React from 'react';
import {Route, Switch, } from 'react-router-dom'
import People from './components/People'
function App() {
	return (
		<>
			<Switch>
				<Route to="/people" component={People} />
			</Switch>
		</>
	);
}

export default App;
