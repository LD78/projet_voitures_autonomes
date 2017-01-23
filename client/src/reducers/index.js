import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import user from './user';
import profile from './profile';
import login from './login';

const app = combineReducers({
  user,
  profile,
  login,
  routing: routerReducer
});

export default app;