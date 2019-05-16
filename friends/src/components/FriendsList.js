import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import { fetchFriends } from '../actions';
import Friend from './Friend';

const Container = styled.div`
	max-width: 1200px;
	margin: 0 auto;
`;

class FriendsList extends React.Component {
	constructor() {
		super();
	}

	componentDidMount() {
		this.props.fetchFriends();
	}

	render() {
		if (this.props.fetchingData) {
			return (
				<Container>
					<h1>Loading...</h1>
				</Container>
			);
		}
		return (
			<Container>
				<h1>Friends List</h1>
				{this.props.friends.map((friend) => <Friend friend={friend} key={friend.id} />)}
			</Container>
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
