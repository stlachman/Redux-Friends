import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import FriendsList from './components/FriendsList';
import FriendForm from './components/FriendForm';
import Home from './components/Home';
import Login from './components/Login';
import Navigation from './components/Navigation';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

function App() {
	return (
		<Router>
			<div>
				<Navigation />
				<Route exact path="/" component={Home} />
				<Route path="/login" component={Login} />
				<PrivateRoute exact path="/friends-list" component={FriendsList} />
				<PrivateRoute exact path="/add-friend" component={FriendForm} />
			</div>
		</Router>
	);
}

export default App;
