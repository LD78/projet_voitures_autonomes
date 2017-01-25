import * as types from '../constants/profile';

export function addCar(id) {
  alert("Action --> addCar");
  return {
    type: types.ADD_CAR,
    id
  };
}

export function addFleet(name) {
  alert("Action --> addFleet");
  return {
    type: types.ADD_FLEET,
    name
  };
}

