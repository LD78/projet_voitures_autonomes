import * as types from '../constants/login';

export function login(username, password) {
	alert('Action --> login');
	return {
		type: types.LOGIN,
		username,
		password
	};
}

