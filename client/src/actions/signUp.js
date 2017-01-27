import * as types from '../constants/signUp';

export function signUp(email, username, password) {
	return {
		type: types.SIGNUP,
		email,
		username,
		password
	};
}

