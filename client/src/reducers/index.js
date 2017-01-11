import { combineReducers } from 'redux';
import AuthReducer from './auth';
import CarsReducer from './cars';

const rootReducer = combineReducers({
    auth: AuthReducer,
    cars: CarsReducer
});

export default rootReducer;
