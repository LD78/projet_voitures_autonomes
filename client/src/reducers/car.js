/**
 * Created by Yaku on 18/01/2017.
 */
import * as types from '../constants/car';

const initialState = {
  carDB: []
};

export default function getCar(state = initialState, action) {
  switch (action.type) {

    case typesCar.GET_CAR:
      alert('Reducer --> GET_CAR ' + action.id);

      return {
        ...state
      };


    default:
      return state;
  }
}
