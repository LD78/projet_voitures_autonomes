import * as typesFleet from '../constants/fleet';

export function getFleet() {
  return {
    type: typesFleet.GET_FLEETS
  };
}

export function addFleet(name) {
  return {
    type: typesFleet.ADD_FLEET,
    name
  };
}

export function patchFleet(name, newName) {
  return {
    type: typesFleet.PATCH_FLEET,
    name,
    newName
  };
}

export function deleteFleet(name) {
  return {
    type: typesFleet.DELETE_FLEET,
    name
  };
}

export function addCarInFleet(carId, fleetName) {
    return {
        type: typesFleet.ADD_CAR_IN_FLEET,
        carId,
        fleetName
    };
}