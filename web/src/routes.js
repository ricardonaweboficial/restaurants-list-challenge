import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Restaurants from './pages/Restaurants';
import Menu from './pages/Menu';

export default function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/' exact component={Restaurants}/>
				<Route path='/menu' component={Menu}/>
			</Switch>
		</BrowserRouter>
	);
}