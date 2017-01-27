import * as types from '../constants/login';

export function login(username, password) {
	return {
		type: types.LOGIN,
		username,
		password
	};
}

export function deleteAccount(email, password) {
  return {
    type: types.DEL_ACCOUNT,
    email,
    password
  };
}

