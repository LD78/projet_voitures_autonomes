import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import user from './user';
import profile from './profile';
import login from './login';
import signUp from './signUp';

const app = combineReducers({
  user,
  profile,
  login,
  signUp,
  routing: routerReducer
});

export default app;