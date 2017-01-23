/**
 * Created by Yaku on 18/01/2017.
 */
import * as types from '../constants/profile';

const initialState = {
  currentUser: "User",
  numCar: 0,
  numFleet: 0,
  carArray: ["FirstCar"],
  fleetArray: ["FirstFleet"]
};

export default function profile(state = initialState, action) {
  switch (action.type) {

    case types.ADD_CAR:
      alert("Reducer --> ADD_CAR " + action.name);
      state.carArray.push(action.name);
      alert(state.carArray);
      //state.carArray.push(action.name);
      return {
        ...state,
        //numCar: action.numCar + 1
      }

    case types.ADD_FLEET:
      alert("Reducer --> ADD_FLEET " + action.name);
      state.fleetArray.push(action.name);
      alert(state.fleetArray);
      return {
        ...state,
      }

    default:
      return state;
  }
}
