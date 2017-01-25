
import * as types from '../constants/signUp';
import axios from 'axios';
import { browserHistory } from 'react-router';

const initialState = {
  email: "",
  password: "",
  username: ""
};

export default function login(state = initialState, action) {
  switch (action.type) {

    case types.SIGNUP:
      alert("SIGNUP");
      return {
        ...state, email: action.email,  password: action.password, username: action.username
      }

    default:
      return state;
  }
}
