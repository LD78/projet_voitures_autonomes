/**
 * Created by Yaku on 18/01/2017.
 */
import * as types from '../constants/profile';
import axios from 'axios';

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
      axios.post("http://localhost:5000/api/cars", {
        "data": {
          "type": "cars",
          "attributes":{
            "carId": 12,
            "fleetId": 1
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
      /*return axios({
        url: "http://localhost:5000/api/cars",
        timeout: 20000,
        method: 'post',
        data: {
          carName: action.name,
          carId: 123456789,
          fleetId: 1
        }
      })*/

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
