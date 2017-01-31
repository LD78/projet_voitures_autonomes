import * as typesCar from '../constants/car';

export function getCar(id) {
    return {
        type: typesCar.GET_CAR,
        id
    };
}

export function addCar(id) {
    return {
        type: typesCar.ADD_CAR,
        id
    };
}

export function patchCar(id, newId) {
    return {
        type: typesCar.PATCH_CAR,
        id,
        newId
    };
}

export function deleteCar(id) {
    alert("ACTION ---> DELETE_CAR: " + id);
    return {
        type: typesCar.DELETE_CAR,
        id
    };
}