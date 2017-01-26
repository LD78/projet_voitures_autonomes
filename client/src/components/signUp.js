
import React, {Component, PropTypes} from 'react';
import { Button, Input, Form } from 'semantic-ui-react'

import * as signUpActions from '../actions/signUp';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

@connect(state => ({
  signUp: state.signUp
}))

export default class Login extends Component {

  constructor() {
    super();
    this.state = {
      user: "",
      password: "",
      email: ""
    };
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }


 /* signUp(e) {
    e.preventDefault();
    this.actions.signUp(this.state.email, this.state.user, this.state.password)
  }*/


  render() {

    console.log("SIGNUP");
    console.log(this.props);

    const signUpStyle = {
      container : {
        marginTop : "10px",
      }
    }

    const {signUp: { username }, dispatch} = this.props;
    const actions = bindActionCreators(signUpActions, dispatch);

    return (
      <div className="ui middle aligned center aligned grid" style ={signUpStyle.container}>

        <Form>
          <h2>
            Sign Up
          </h2>
          <Form.Field>
            <Input type="text" name="email" value={this.state.email}
                   placeholder="@email"
                   onChange={this.handleChange.bind(this)}/>
          </Form.Field>
          <Form.Field>
            <Input type="text" name="user" value={this.state.user}
                   placeholder="Username"
                   onChange={this.handleChange.bind(this)}/>
          </Form.Field>
          <Form.Field>
            <Input type="password" name="password" value={this.state.password}
                   placeholder="Password"
                   onChange={this.handleChange.bind(this)}/>
          </Form.Field>
          <Button color='teal' type="submit" onClick={() => actions.signUp(this.state.email, this.state.user, this.state.password)}>Sign Up</Button>
        </Form>
      </div>
    );
  }

}


