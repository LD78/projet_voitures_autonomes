/**
 * Created by Yaku on 28/12/2016.
 */

import { browserHistory } from 'react-router';


const initialState =  {
  authenticated: false,
  username: "Default Username"
};


const hardCodedLogin = [
  {"user":'guillaume',"password":"banane"},
  {"user":'louis',"password":"ananas"},
  {"user":'david',"password":"mandarine"}
];

export default function auth(state = initialState, action) {

  switch (action.type) {
    case "SIGN_IN_USER":
      if (hardCodedLogin.reduce(function(a,b) {
          return a || (b.user == action.username && b.password == action.password);
        }, false)) {
        browserHistory.push('/profile');
        alert("You are");
        alert(action.username);
        return {
          ...state, authenticated: true, username: action.username
        };

      }
      else return state;
    case "SIGN_OUT_USER":
      browserHistory.push('/login');
      return {
        ...state, authenticated: false
      };
    default:
      return state;
  }

}
