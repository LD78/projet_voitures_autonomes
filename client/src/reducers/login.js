/**
 * Created by Yaku on 18/01/2017.
 */
/*import * as types from '../constants/login';


const initialState = {
  username: "esme",
  password: "sudria",
  authenticated: false
};

export default function login(state = initialState, action) {
  switch (action.type) {

    case types.LOGIN:
      if(action.username == state.username && action.password == state.password){
        alert("Welcome " + action.username);
        browserHistory.push('/profile');
        return {
          ...state,authenticated: true
        }
      }


    default:
      return state;
  }
}
*/

/**
 * Created by Yaku on 18/01/2017.
 */
import * as types from '../constants/login';
import axios from 'axios';
import { browserHistory } from 'react-router';

const initialState = {
  username: "esme",
  password: "sudria",
  authenticated: false
};

export default function login(state = initialState, action) {
  switch (action.type) {

    case types.LOGIN:
      alert("LOGIN");
      return {
        ...state, authenticated: true
      }

    default:
      return state;
  }
}
