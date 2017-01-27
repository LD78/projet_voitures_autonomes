import * as types from '../constants/login';
import axios from 'axios';
import {browserHistory} from 'react-router';

const initialState = {
	username: 'esme',
	password: 'sudria',
	authenticated: false
};

export default function login(state = initialState, action) {
	switch (action.type) {

		case types.LOGIN: {
			return {
				...state, authenticated: true
			};
		}

    case types.DEL_ACCOUNT: {

      axios.get('http://localhost:5000/api/ucers')
        .then(function (response) {
          response.data.data.forEach(function(element) {

            if(element.attributes.email == action.email){
              axios.delete('http://localhost:5000/api/fleets/'+element.id)
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

