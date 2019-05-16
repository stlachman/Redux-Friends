import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
	return (
		<nav>
			<ul>
				<li>
					<NavLink to="/">Home</NavLink>
				</li>
				<li>
					<NavLink to="/login">Login</NavLink>
				</li>
				<li>
					<NavLink to="/friends-list">Friends</NavLink>
				</li>
				<li>
					<NavLink to="/add-friend">Add Friend</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
