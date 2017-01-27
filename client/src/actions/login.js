import * as types from '../constants/login';

export function login(username, password) {
	alert('Action --> login');
	return {
		type: types.LOGIN,
		username,
		password
	};
}

export function deleteAccount(email, password) {
  alert('Action --> deleteAccount');
  return {
    type: types.DEL_ACCOUNT,
    email,
    password
  };
}

