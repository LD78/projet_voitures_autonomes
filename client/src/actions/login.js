import * as types from '../constants/login';

export function login(email, password) {
	return {
		type: types.LOGIN,
    email,
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

