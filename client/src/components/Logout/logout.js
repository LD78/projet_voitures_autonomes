import React from 'react';
import {connect} from 'react-redux'

class Logout extends React.Component {

  render() {
    return (
      <div>
        <p>Logout</p>
        <button type="submit" onClick={this.props.logout}>Submit</button>

      </div>
    )
  }
}

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated
});

//dispatch is the only way to trigger a state change.
/*const mapDispatchToProps = dispatch => ({
 logout : (username, password) => {
 dispatch({
 type: "SIGN_OUT_USER",
 username,
 password
 })
 }
 });*/


const mapDispatchToProps = dispatch => ({
  logout : () => {
    dispatch({
      type: "SIGN_OUT_USER",
    })
  }
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Logout)