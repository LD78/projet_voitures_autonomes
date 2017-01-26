/**
 * Created by Yaku on 18/01/2017.
 */
import * as types from '../constants/car';
import * as apiDB from '../actions/apiDB';

const initialState = {
  carDB: []
};

export default function getCar(state = initialState, action) {
  switch (action.type) {

    case types.GET_CARS:
      alert('Reducer --> GET_CARS' + action.id);
      console.log('GET_CARS');
      console.log(action.DB);
      return {
        ...state, carDB
      };


    default:
      return state;
  }
}
