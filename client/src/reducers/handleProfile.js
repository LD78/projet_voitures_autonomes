/**
 * Created by Yaku on 28/12/2016.
 */


const initialState =  {
  numCar: 0,
  numFleet: 0
};


export default function add(state = initialState, action) {

  switch (action.type) {
    case "ADD_CAR":
      return {
        ...state, numCar: action.numCar + 1
      };
    case "DEL_CAR":
      return {
        ...state, numCar: action.numCar - 1
      };
    case "ADD_FLEET":
      return {
        ...state, numFleet: action.numFleet + 1
      };
    case "DEL_FLEET":
      return {
        ...state, numFleet: action.numFleet - 1
      };
    default:
      return state;
  }
}
