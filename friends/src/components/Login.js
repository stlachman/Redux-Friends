import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
	margin: 0 auto;
	max-width: 500px;
	text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  display: block;
  margin: 0 0 20px;
`;

class Login extends React.Component {
	constructor() {
		super();

		this.state = {
			credentials: {
				username: '',
				password: ''
			}
		};
	}

	handleChange = (event) => {
		this.setState({
      credentials: {
        ...this.state.credentials,
        [event.target.name]: event.target.value
      }
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
	};

	render() {
		return (
			<div>
				<FormContainer>
					<h1>Login page</h1>
					<Form onSubmit={this.handleSubmit}>
						<Input
							value={this.state.credentials.username}
							name="username"
							onChange={this.handleChange}
							type="text"
							placeholder="Username"
						/>
						<Input
							value={this.state.credentials.password}
							name="password"
							onChange={this.handleChange}
							type="password"
							placeholder="Password"
						/>
						<button>Submit</button>
					</Form>
				</FormContainer>
			</div>
		);
	}
}

export default Login;
