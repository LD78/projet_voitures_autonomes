/**
 * Created by Yaku on 28/12/2016.
 */

import React, {Component, PropTypes} from 'react';
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

export default class AppMenu extends Component {

  /*@connect(state => ({
    login: state.login
  }))*/

  state = {};

  handleItemClick = (e, {name}) => {
    this.setState({activeItem: name});
  };

  render() {
    const {activeItem} = this.state;
    let logMenu = null;
    console.log(this.props);
    //if (this.props.login.authenticated) {
      logMenu = <Menu.Item
        name='profile'
        as={Link}
        to="profile"
        active={activeItem === 'profile'}
        onClick={this.handleItemClick}
      />

    //}

    return (
      <Menu>
        <Menu.Item
          name='signUp'
          as={Link}
          to="signUp"
          active={activeItem === 'signUp'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='login'
          as={Link}
          to="login"
          active={activeItem === 'login'}
          onClick={this.handleItemClick}
        />
          <Menu.Item
              name='car'
              as={Link}
              to="car"
              active={activeItem === 'car'}
              onClick={this.handleItemClick}
          />
        {logMenu}
      </Menu>
    )
  }

}
