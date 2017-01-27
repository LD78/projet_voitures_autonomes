/**
 * Created by Yaku on 18/01/2017.
 */
import * as types from '../constants/car';
//import * as apiDB from '../actions/apiDB';

const initialState = {
  carDB: "test"
};

export default function getCar(state = initialState, action) {
  switch (action.type) {

    case types.GET_CARS:
      console.log('GET_CARS');

      return {
        ...state
      };

    default:
      return state;
  }
}
