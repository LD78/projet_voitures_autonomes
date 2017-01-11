import React from 'react';
import App from 'components/App/app';
import Login from 'components/Login/login';
import Logout from 'components/Logout/logout';
import Home from 'components/Home/home';
import Cars from 'components/Cars/cars';
import NewCar from 'components/Cars/NewCar';
import Car from 'components/Cars/Car';
import RequireAuth from 'components/Auth/auth';
import Profile from 'components/Profile/profile';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import {loadCars} from "../../actions";
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

//Reducer
import reducer from 'reducers/index';

const loggerMiddleware = createLogger()

const store = createStore(reducer, applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  ));

store.dispatch(loadCars())

export default class Root extends React.Component {

    render(){
        return (
            <Provider store={store}>
                <Router history={browserHistory}>
                    <Route path="/" component={App}>
                        <IndexRoute component={Home} />
                        <Route path="/home" component={Home} />
                        <Route path="/cars" component={RequireAuth(Cars)} >
                            <Route path="/cars/:id" component={RequireAuth(Car)} />
                            <Route path="/cars/new" component={RequireAuth(NewCar)} />
                        </Route>
                        <Route path="/profile" component={RequireAuth(Profile)} />
                        <Route path="/login" component={Login} />
                        <Route path="/logout" component={Logout} />
                    </Route>
                </Router>
            </Provider>
        )
    }
}
