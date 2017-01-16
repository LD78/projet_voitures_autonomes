/**
 * Created by Yaku on 28/12/2016.
 */

import { combineReducers } from 'redux';
import AuthReducer from './auth';
import HandleProfileReducer from './handleProfile';

const rootReducer = combineReducers({
  auth: AuthReducer,
  handleProfile: HandleProfileReducer
});

export default rootReducer;