import axios from 'axios';
import { axiosWithAuth } from '../axiosWithAuth';

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

export const FETCH_DATA_INIT = 'FETCH_DATA_INIT';
export const FETCH_SUCCESSFUL = 'FETCH_SUCCESSFUL';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const fetchFriends = () => (dispatch) => {
	dispatch({ type: FETCH_DATA_INIT });

	axiosWithAuth()
		.get(`http://localhost:5000/api/friends`)
		.then((res) => dispatch({ type: FETCH_SUCCESSFUL, payload: res.data }))
		.catch((err) => console.log(err));
};
