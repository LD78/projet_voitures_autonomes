import { browserHistory } from 'react-router';
import carApi from '../api/carApi';

export const SIGN_IN_USER = 'SIGN_IN_USER';
export const SIGN_OUT_USER = 'SIGN_OUT_USER';

export function signInUser()
{
    return {
        type: SIGN_IN_USER
    }
}

export function signOutUser()
{
    browserHistory.push('/login');
    return {
        type: SIGN_OUT_USER
    }
}

export const REQUEST_CARS = 'REQUEST_CARS';

function requestCars() {
  return {
    type: REQUEST_CARS
  }
}

export const RECEIVE_CARS = 'RECEIVE_CARS'
function receiveCars(json) {
  return {
    type: RECEIVE_CARS,
    cars: json.data
  }
}

export function loadCars() {
    return function (dispatch) {
        return carApi.getAll().then( cars => {
            dispatch(loadCarsSuccess(cars))
        }).catch(error => {
            throw(error)
        })
    }
}

export const LOAD_CARS_SUCCESS = 'LOAD_CARS_SUCCESS';
export function loadCarsSuccess(cars) {
    return { type: LOAD_CARS_SUCCESS, cars}
}

export const UPDATE_CAR_SUCCESS = 'UPDATE_CAR_SUCCESS';
export function updateCarSuccess(car) {
  return {type: UPDATE_CAR_SUCCESS, car}
}

export const CREATE_CAR_SUCCESS = 'CREATE_CAR_SUCCESS';
export function createCarSuccess(car) {
  return {type: CREATE_CAR_SUCCESS, car}
}

export const DELETE_CAR_SUCCESS = 'DELETE_CAR_SUCCESS';
export function deleteCarSuccess(car) {
  return {type: DELETE_CAR_SUCCESS, car}
}

//
export function updateCar(car) {
  return function (dispatch) {
    return carApi.updateCar(car).then(responseCar => {
      dispatch(updateCarSuccess(responseCar));
    }).catch(error => {
      throw(error);
    });
  };
}

export function createCar(car) {
  return function (dispatch) {
    return carApi.createCar(car).then(responseCar => {
      dispatch(createCarSuccess(responseCar));
      return responseCar;
    }).catch(error => {
      throw(error);
    });
  };
}

export function deleteCar(car) {
  return function(dispatch) {
    return carApi.deleteCar(car).then(() => {
      console.log(`Deleted ${car.id}`)
      dispatch(deleteCarSuccess(car));
      return;
    }).catch(error => {
      throw(error);
    })
  }
}





