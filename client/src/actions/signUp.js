import * as types from '../constants/signUp';

export function signUp(email, username, password) {
	alert('Action --> signUp');
	return {
		type: types.SIGNUP,
		email,
		username,
		password
	};
}

