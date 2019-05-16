import React from 'react';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

const NavBar = styled.nav`
	display: flex;
	flex-wrap: wrap;
`;

const NavItems = styled.ul`
	list-style: none;
	padding: 0;
`;

const NavItem = styled.li`
	margin: 0 20px;
	display: inline-block;
`;

const Navigation = () => {
	return (
		<NavBar>
			<NavItems>
				<NavItem>
					<NavLink to="/">Home</NavLink>
				</NavItem>
				<NavItem>
					<NavLink to="/login">Login</NavLink>
				</NavItem>
				<NavItem>
					<NavLink to="/friends-list">Friends</NavLink>
				</NavItem>
				<NavItem>
					<NavLink to="/add-friend">Add Friend</NavLink>
				</NavItem>
			</NavItems>
		</NavBar>
	);
};

export default Navigation;
