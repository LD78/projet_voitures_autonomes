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

export function patchCar(name, newName) {
    alert("ACTION --> PATCH_CAR: " + name);
    return {
        type: typesCar.PATCH_CAR,
        name,
        newName
    };
}

export function deleteCar(id) {
    return {
        type: typesCar.DELETE_CAR,
        id
    };
}