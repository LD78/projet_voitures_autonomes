import * as types from '../constants/profile';

export function addCar(id) {
	alert('Action --> addCar');
	return {
		type: types.ADD_CAR,
		id
	};
}

export function addFleet(name) {
	alert('Action --> addFleet');
	return {
		type: types.ADD_FLEET,
		name
	};
}

export function addUser(email) {
	alert('Action --> addUser');
	return {
		type: types.ADD_USER,
		email
	};
}

export function addTrajet(trajetId) {
	alert('Action --> addTrajet');
	return {
		type: types.ADD_TRAJET,
		trajetId
	};
}
