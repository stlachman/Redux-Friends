import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { deleteFriend } from '../actions';

const Tile = styled.div`
	background: #ffffff;
	margin: 20px auto;
	padding: 20px;
	max-width: 350px;
`;

const Friend = (props) => {
	return (
		<Tile>
			<p>Name: {props.friend.name}</p>
			<p>Age: {props.friend.age}</p>
			<p>Email: {props.friend.email}</p>
			<button onClick={() => props.deleteFriend(props.friend.id)}>Delete Friend</button>
		</Tile>
	);
};

export default connect(null, { deleteFriend })(Friend);
