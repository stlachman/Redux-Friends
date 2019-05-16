import React from 'react';
import { Route } from 'react-router-dom';

import FriendsList from './components/FriendsList';
import Login from './components/Login';
import Navigation from './components/Navigation';
import PrivateRoute from './components/PrivateRoute';
import './App.css';



function App() {
	return (
		<div>
			<Navigation />
      <PrivateRoute exact path="/" component={FriendsList}/>
			<Route path="/login" render={(props) => <Login {...props} />} />
		</div>
	);
}

export default App;
