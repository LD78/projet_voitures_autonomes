import * as typesFleet from '../constants/fleet';

export function getFleet(id) {
  return {
    type: typesFleet.GET_FLEETS,
    id
  };
}

export function addFleet(id) {
  return {
    type: typesFleet.ADD_FLEET,
    id
  };
}

export function patchFleet(name, newName) {
  alert("ACTION --> PATCH_FLEET: " + name);
  return {
    type: typesFleet.PATCH_FLEET,
    name,
    newName
  };
}

export function deleteFleet(id) {
  return {
    type: typesFleet.DELETE_FLEET,
    id
  };
}