import axios from 'axios';

export const LOGIN_INITIALIZE = 'LOGIN_INITIALIZE';
export const LOGIN_SUCCESSFUL = 'LOGIN_SUCCESSFUL';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = (creds) => (dispatch) => {
	dispatch({ type: LOGIN_INITIALIZE });

	return axios
		.post('http://localhost:5000/api/login', creds)
		.then((res) => {
			localStorage.setItem('token', res.data.payload);
			dispatch({ type: LOGIN_SUCCESSFUL, payload: res.data });
		})
		.catch((err) => {
			console.log(err);
		});
};
