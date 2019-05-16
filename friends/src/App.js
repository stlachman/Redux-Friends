import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import FriendsList from './components/FriendsList';
import Login from './components/Login';
import Navigation from './components/Navigation';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

function App() {
	return (
		<Router>
			<div>
				<Navigation />
				<PrivateRoute exact path="/" component={FriendsList} />
				<Route path="/login" component={Login} />
			</div>
		</Router>
	);
}

export default App;
