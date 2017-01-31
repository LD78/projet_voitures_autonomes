import * as types from '../constants/login';
import axios from 'axios';
import {browserHistory} from 'react-router';

const initialState = {
  username:"default Username",
	authenticated: false
};

export default function login(state = initialState, action) {
	switch (action.type) {

		case types.LOGIN: {

      axios.get('http://localhost:5000/api/users')
        .then(function (response) {
          response.data.data.forEach(function(element) {
            console.log(element.attributes.email);
            if(element.attributes.email == action.email && element.attributes.password == action.password){
              alert("You are connected !!! ");
              state.username = element.attributes.username;
              alert(state.username);
            }
          })
        })
        .catch(function (error) {
          console.log(error);
        });

			return {
				...state
			};
		}

    case types.DEL_ACCOUNT: {

      axios.get('http://localhost:5000/api/users')
        .then(function (response) {
          response.data.data.forEach(function(element) {

            if(element.attributes.email == action.email && element.attributes.password == action.password){
              axios.delete('http://localhost:5000/api/users/'+element.id)
                .then(function (response) {
                  console.log(response);
                })
                .catch(function (error) {
                  console.log(error);
                });
            }
          })
        })
        .catch(function (error) {
          console.log(error);
        });

      return {
        ...state
      };
    }
		default:
			return state;

	}
}

