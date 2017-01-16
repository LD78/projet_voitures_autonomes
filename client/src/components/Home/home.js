/**
 * Created by Yaku on 28/12/2016.
 */

import React from 'react';
import {connect} from 'react-redux'
import { browserHistory } from 'react-router';

export default class Home extends React.Component {

  render() {
    return (
      <div>
        <h1>Welcome to SmartCar Application</h1>
        <button type="submit" onClick={this.props.logout}>Connexion</button>
      </div>
    )
  }

}