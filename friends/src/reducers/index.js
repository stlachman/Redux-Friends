import {
	LOGIN_INITIALIZE,
	LOGIN_SUCCESSFUL,
	LOGIN_FAILURE,
	FETCH_DATA_INIT,
	FETCH_SUCCESSFUL,
	FETCH_FAILURE,
	FORM_INIT_FRIEND,
	FORM_ADD_FRIEND,
	DELETE_FRIEND_INIT,
	DELETE_FRIEND_SUCCESS
} from '../actions';

const inititalState = {
	friends: [],
	isLoggingIn: false,
	fetchingData: false,
	postingFriend: false,
	deletingFriend: false,
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
		case FETCH_FAILURE:
			return {
				...state,
				fetchingData: false,
				error: action.payload
			};
		case FORM_INIT_FRIEND:
			return {
				...state,
				error: '',
				postingFriend: true
			};
		case FORM_ADD_FRIEND:
			return {
				...state,
				friends: action.payload,
				postingFriend: false
			};
		case DELETE_FRIEND_INIT:
			return {
				...state,
				error: '',
				deletingFriend: true
			};
		case DELETE_FRIEND_SUCCESS:
			return {
				...state,
				friends: action.payload,
				deletingFriend: false
			};
		default:
			return state;
	}
};

export default reducer;
