import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchFriends } from '../actions';

class FriendsList extends React.Component {
	constructor() {
		super();
	}

	componentDidMount() {
		this.props.fetchFriends();
	}

	render() {
		console.log(this.props);
		if (!this.props.friends) {
			return <h1>Loading</h1>;
		}
		return (
			<div>
				<h1>Friends List</h1>
				{this.props.friends.map((friend) => <div key={friend.id}>{friend.name}</div>)}
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		friends: state.friends,
		fetchingData: state.fetchingData,
		error: state.error
	};
};

export default withRouter(connect(mapStateToProps, { fetchFriends })(FriendsList));
