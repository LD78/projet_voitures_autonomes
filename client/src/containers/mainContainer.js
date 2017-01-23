/**
 * Created by Yaku on 18/01/2017.
 */
import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as profileActions from '../actions/profile';
import  Profile  from '../components/profile';
import  Login  from '../components/login';

@connect(state => ({
  profile: state.profile
}))

export default class MainComponent extends Component {

  render () {
    console.log("MainComponent");
    console.log(this.props);
    console.log(this.props.profile);
    console.log(this.props.profile.carArray);
    console.log(this.props.profile.utilisateur);


    const { profile: { carArray }, dispatch } = this.props;// Permet de dispacth info au fils
    const actions = bindActionCreators(profileActions, dispatch);// Permet de lancer les actions

    return (
      <div>
        <h1>The App Voitures Autonomes</h1>
        <Profile username={carArray} addCar={actions.addCar}/>
      </div>
    );

   /* return (
      <div>
        <h1>The App Voitures Autonomes</h1>
        <Login />
      </div>
    );*/
  }
}