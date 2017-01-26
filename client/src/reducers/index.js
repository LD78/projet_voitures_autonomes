import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import user from './user';
import profile from './profile';
import login from './login';
import signUp from './signUp';
import car from './car';

const app = combineReducers({
	user,
	profile,
	login,
	signUp,
	car,
	routing: routerReducer
});

export default app;
