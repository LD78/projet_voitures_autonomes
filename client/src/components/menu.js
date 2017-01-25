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
    alert("click onglet");
    this.setState({activeItem: name});
    alert(this.state.activeItem);
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
          name='login'
          as={Link}
          to="login"
          active={activeItem === 'login'}
          onClick={this.handleItemClick}
        />
        {logMenu}
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