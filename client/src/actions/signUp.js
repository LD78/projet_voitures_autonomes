import * as types from '../constants/signUp';

export function signUp(email, username, password) {
  alert("ACTION --> SIGNUP");
	return {
		type: types.SIGNUP,
		email,
		username,
		password
	};
}

