import * as types from '../constants/profile';
import * as typesCar from '../constants/car';

export function getCar(id) {
  alert('Action --> getCar');
  return {
    type: typesCar.GET_CAR,
    id
  };
}

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

export function deleteFleet(name) { 
	alert('Action --> deleteFleet'); 
	return { 
		type: types.DELETE_FLEET, 
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

export function addTrajet(destination, car, fleet) {
	alert('Action --> addTrajet');
	return {
		type: types.ADD_TRAJET,
    destination,
    car,
    fleet
	};
}
