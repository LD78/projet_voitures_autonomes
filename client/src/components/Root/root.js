/**
 * Created by Yaku on 28/12/2016.
 */

import React from 'react';
import App from 'components/App/app';
import Login from 'components/Login/login';
import Logout from 'components/Logout/logout';
import Home from 'components/Home/home';
import RequireAuth from 'components/Auth/auth';
import Profile from 'components/Profile/profile';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import {createStore} from "redux";
import {Provider} from "react-redux";

//Reducer
import reducer from 'reducers/index';

const store = createStore(reducer);

export default class Root extends React.Component {

  render(){
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path="/" component={App}>
            <IndexRoute component={Login} />
            <Route path="profile" component={RequireAuth(Profile)} />
            <Route path="login" component={Login} />
            <Route path="home" component={Home} />
            <Route path="logout" component={Logout} />
          </Route>
        </Router>
      </Provider>
    )
  }

}
