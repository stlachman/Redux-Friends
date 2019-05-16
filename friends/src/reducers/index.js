import {
	LOGIN_INITIALIZE,
	LOGIN_SUCCESSFUL,
	LOGIN_FAILURE,
	FETCH_DATA_INIT,
	FETCH_SUCCESSFUL,
	FETCH_FAILURE
} from '../actions';

const inititalState = {
	friends: [],
	isLoggingIn: false,
	fetchingData: false,
	error: ''
};

const reducer = (state = inititalState, action) => {
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
		case FETCH_DATA_INIT:
			return {
				...state,
				fetchingData: true,
				error: ''
			};
		case FETCH_SUCCESSFUL:
			return {
				...state,
				fetchingData: false,
				friends: action.payload,
				error: ''
			};
		default:
			return state;
	}
};

export default reducer;
