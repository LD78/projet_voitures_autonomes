import * as types from '../constants/profile';
import * as typesCar from '../constants/car';

export function getCar(id) {
  return {
    type: typesCar.GET_CAR,
    id
  };
}

export function addCar(id) {
	return {
		type: types.ADD_CAR,
		id
	};
}

export function addFleet(name) {
	return {
		type: types.ADD_FLEET,
		name
	};
}

export function patchFleet(newName) {
    return {
        type: types.PATCH_FLEET,
				name,
        newName
    };
}

export function deleteFleet(name) { 
	return { 
		type: types.DELETE_FLEET, 
		name 
	};
 }

export function addUser(email) {
	return {
		type: types.ADD_USER,
		email
	};
}

export function addTrajet(destination, car, fleet) {
	return {
		type: types.ADD_TRAJET,
    destination,
    car,
    fleet
	};
}
