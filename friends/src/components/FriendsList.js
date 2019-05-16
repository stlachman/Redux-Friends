import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchFriends, addFriend } from '../actions';

class FriendsList extends React.Component {
	constructor() {
		super();

		this.state = {
			newFriend: {
				name: '',
				age: '',
				email: ''
			}
		};
	}

	componentDidMount() {
		this.props.fetchFriends();
	}

	handleChange = (event) => {
		let value = event.target.value;

		this.setState({
			newFriend: {
				...this.state.newFriend,
				[event.target.name]: event.target.value
			}
		});

		this.setState({ [event.target.name]: value });
	};

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.addFriend(this.state.newFriend);
		this.setState({
			newFriend: {
				name: '',
				age: '',
				email: ''
			}
		});
	};

	render() {
		console.log(this.props);
		if (!this.props.friends) {
			return <h1>Loading</h1>;
		}
		return (
			<div>
				<h1>Friends List</h1>
				{this.props.friends.map((friend) => <div key={friend.id}>{friend.name}</div>)}

				<h2>Add a Friend</h2>
				<form onSubmit={this.handleSubmit}>
					<input
						onChange={this.handleChange}
						placeholder="Name"
						value={this.state.newFriend.name}
						type="text"
						name="name"
					/>
					<input
						onChange={this.handleChange}
						placeholder="Age"
						value={this.state.newFriend.age}
						type="text"
						name="age"
					/>
					<input
						onChange={this.handleChange}
						placeholder="Email"
						value={this.state.newFriend.email}
						type="text"
						name="email"
					/>
					<button>Add Friend</button>
				</form>
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

export default withRouter(connect(mapStateToProps, { fetchFriends, addFriend })(FriendsList));
