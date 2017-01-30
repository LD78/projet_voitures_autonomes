import * as types from '../constants/signUp';
import axios from 'axios';
import {browserHistory} from 'react-router';

const initialState = {
	email: '',
	password: '',
	username: ''
};

export default function login(state = initialState, action) {
	switch (action.type) {

		case types.SIGNUP:
			alert('REDUCER --> SIGNUP');
      axios.post('http://localhost:5000/api/users', {
          data: {
            type: 'users',
            attributes: {
              email: action.email,
              username: action.username,
              password: action.password
            }
          }
        },
        {
          headers: {
            'Content-Type': 'application/vnd.api+json'}
        })
        .then(function (response) {
          console.log('GOOD');
          console.log(response);
        })
        .catch(function (error) {
          console.log('FAIL');
          console.log(error);
        });
			return {
				...state
			};

		default:
			return state;
	}
}

