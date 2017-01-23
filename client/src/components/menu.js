/**
 * Created by Yaku on 28/12/2016.
 */

import React, {Component, PropTypes} from 'react';
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router'
//import { connect } from 'react-redux'

export default class AppMenu extends Component {

  state = {};

  handleItemClick = (e, {name}) => {
    alert("click onglet");
    console.log();
    this.setState({activeItem: name});
  };

  render() {
    const {activeItem} = this.state;
    let logMenu = null;

    /*if (!this.props.authenticated) {
      logMenu = <Menu.Item
        name='login'
        as={Link}
        to="login"
        active={activeItem === 'login'}
        onClick={this.handleItemClick}
      />
    } else {
      logMenu = <Menu.Item
        name='logout'
        as={Link}
        to="logout"
        active={activeItem === 'logout'}
        onClick={this.handleItemClick}
      />
    }
*/
    return (
      <Menu>
        <Menu.Item
          name='login'
          as={Link}
          to="login"
          active={activeItem === 'login'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='profile'
          as={Link}
          to="profile"
          active={activeItem === 'profile'}
          onClick={this.handleItemClick}
        />

      </Menu>
    )
  }

}

/*
function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  }
}
*/
//export default connect(mapStateToProps)(AppMenu);