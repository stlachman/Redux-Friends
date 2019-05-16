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
		.catch((err) => dispatch({ type: FETCH_FAILURE, payload: err }));
};

export const FORM_INIT_FRIEND = 'FORM_INIT_FRIEND';
export const FORM_ADD_FRIEND = 'FORM_ADD_FRIEND';

export const addFriend = (friend) => (dispatch) => {
	dispatch({ type: FORM_INIT_FRIEND });
	return axiosWithAuth()
		.post(`http://localhost:5000/api/friends`, friend)
		.then((res) => dispatch({ type: FORM_ADD_FRIEND, payload: res.data }))
		.catch((err) => console.log(err));
};

export const DELETE_FRIEND_INIT = 'DELETE_FRIEND_INIT';
export const DELETE_FRIEND_SUCCESS = 'DELETE_FRIEND_SUCCESS';

export const deleteFriend = (id) => (dispatch) => {
	dispatch({ type: DELETE_FRIEND_INIT });
	return axiosWithAuth()
		.delete(`http://localhost:5000/api/friends/${id}`)
		.then((res) => dispatch({ type: DELETE_FRIEND_SUCCESS, payload: res.data }))
		.catch((err) => console.log(err));
};
