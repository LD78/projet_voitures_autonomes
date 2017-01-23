import React, {Component} from 'react';

import MainContainer from './mainContainer';
import AppMenu from '../components/menu';
import  Login  from '../components/login';
import  Profile  from '../components/profile';
import { connect } from 'react-redux';

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
/*
  render(){
    return (
      <div>
        <AppMenu />
        {this.props.children}
      </div>
    )
  }*/

   render(){
   return (
     <div>
        <Profile />
     </div>
    )
   }
}

export default App;
