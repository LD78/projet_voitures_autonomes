/**
 * Created by Yaku on 18/01/2017.
 */
import * as types from '../constants/profile';
import axios from 'axios';

const initialState = {
  currentUser: "User",
  numCar: 0,
  numFleet: 0,
  carArray: ["*FirstCar*"],
  fleetArray: ["FirstFleet"],
  testDeOuf: false
};

export default function profile(state = initialState, action) {
  switch (action.type) {

    case types.ADD_CAR:
      alert("Reducer --> ADD_CAR " + action.id);
      state.carArray.push('*'+action.id+'*');
      alert(state.carArray);
      //state.carArray.push(action.id);
      axios.post("http://localhost:5000/api/cars", {
          "data": {
            "type": "cars",
            "attributes":{
              "carId": action.id
            }
          }
        },
        {
          headers: {
            "Content-Type": "application/vnd.api+json"}
        })
        .then(function (response) {
          console.log("GOOD");
          console.log(response);
        })
        .catch(function (error) {
          console.log("FAIL");
          console.log(error);
        });

      return {
        ...state,
        //numCar: action.numCar + 1
      }

    case types.ADD_FLEET:
      alert("Reducer --> ADD_FLEET " + action.name);
      state.fleetArray.push(action.name);
      alert(state.fleetArray);
      return {
        ...state, testDeOuf: true
      }

    default:
      return state;
  }
}
