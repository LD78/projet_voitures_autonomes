import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import user from './user';
import profile from './profile';
import login from './login';
import signUp from './signUp';
import car from './car';
import fleet from './fleet';

const app = combineReducers({
	user,
	profile,
	login,
	signUp,
	car,
  fleet,
	routing: routerReducer
});

export default app;
