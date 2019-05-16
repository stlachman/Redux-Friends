import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import { addFriend } from '../actions';

class FriendForm extends React.Component {
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

	handleChange = (event) => {
		event.persist();
		let value = event.target.value;
		if (event.target.name === 'age') {
			value = parseInt(value, 10);
		}

		this.setState((prevState) => ({
			newFriend: {
				...prevState.newFriend,
				[event.target.name]: event.target.value
			}
		}));

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
		this.props.history.push('/friends-list');
	};

	render() {
		return (
			<div>
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
						type="number"
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
		postingFriend: state.postingFriend
	};
};

export default withRouter(connect(mapStateToProps, { addFriend })(FriendForm));
