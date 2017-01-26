import React, {Component} from 'react';

import MainContainer from './mainContainer';
import AppMenu from '../components/menu';
import  Login  from '../components/login';
import  Profile  from '../components/profile';
import { connect } from 'react-redux';

import {checkAuth} from '../actions/auth';

@connect(
  store => {
    return {
      user: store.user
    };
  },
  dispatch => {
    return {
      checkAuth: () => {
        return dispatch(checkAuth());
      }/*,
      logoutAction: () => {
        dispatch(logout());
      }*/
    }
  })

@connect(state => ({
  login: state.login
}))

class App extends Component {
/*
  render() {
    return (
      <div>
         <MainContainer />
      </div>
    )
  }
*/

  render(){
    console.log("APP");
    console.log(this.props);
    return (
      <div>
        <AppMenu />
        {this.props.children}
      </div>
    )
  }

}

export default App;
