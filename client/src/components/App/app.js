/**
 * Created by Yaku on 28/12/2016.
 */

import React from 'react';
import AppMenu from 'components/Menu/menu';
import {connect} from 'react-redux'

class App extends React.Component {

  render(){
    return (
      <div>
        <AppMenu />
        {this.props.children || <p>You are {!this.props.authenticated && 'not'} logged in.</p>}
      </div>
    )
  }

}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(App);
