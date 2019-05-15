import React from 'react';
import { Route } from 'react-router-dom';

import Home from './components/Home';
import Login from './components/Login';
import Navigation from './components/Navigation';
import './App.css';

function App() {
  return (
   <div>
      <Navigation />
      <Route path="/" exact component={Home} />
      <Route path="/login" render={props => <Login {...props} />} />
   </div>
  );
}

export default App;
