import { LOGIN_INITIALIZE, LOGIN_SUCCESSFUL, LOGIN_FAILURE } from '../actions';

const inititalState = {
	friends: [],
	isLoggingIn: false,
	fetchingData: false,
	error: ''
};

export const reducer = (state = inititalState, action) => {
	switch (action.type) {
		case LOGIN_INITIALIZE:
			return {
				...state,
				isLoggingIn: true,
				error: ''
			};
		case LOGIN_SUCCESSFUL:
			return {
				...state,
				isLoggingIn: false
			};
		case LOGIN_FAILURE:
			return {
				...state,
				isLoggingIn: false
			};
		default:
			return state;
	}
};
