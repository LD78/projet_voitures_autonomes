import * as types from '../constants/profile';

export function addCar(name) {
  alert("Action --> addCar");
  return {
    type: types.ADD_CAR,
    name
  };
}

export function addFleet(name) {
  alert("Action --> addFleet");
  return {
    type: types.ADD_FLEET,
    name
  };
}

