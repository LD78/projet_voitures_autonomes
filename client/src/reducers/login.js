/**
 * Created by Yaku on 18/01/2017.
 */
import * as types from '../constants/login';
import { browserHistory } from 'react-router';

const initialState = {
  username: "guillaume",
  password: "banane"
};

export default function login(state = initialState, action) {
  switch (action.type) {

    case types.LOGIN:
      if(action.username == state.username && action.password == state.password){
        alert("Welcome " + action.username);
        browserHistory.push('/profile')
      }
      /*else {
        alert("You're not Guillaume !");
      }*/

      return {
        ...state
      }

    default:
      return state;
  }
}
