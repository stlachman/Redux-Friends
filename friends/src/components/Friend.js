import React from 'react';
import { connect } from 'react-redux';

import { deleteFriend } from '../actions';

const Friend = (props) => {
	return (
		<div>
			<p>Name: {props.friend.name}</p>
			<p>Age: {props.friend.age}</p>
			<p>Email: {props.friend.email}</p>
			<button onClick={() => props.deleteFriend(props.friend.id)}>Delete Friend</button>
		</div>
	);
};

export default connect(null, { deleteFriend })(Friend);
