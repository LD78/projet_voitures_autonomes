
import React, {Component, PropTypes} from 'react';
import { Button, Input, Form } from 'semantic-ui-react'

import * as loginActions from '../actions/login';
import * as authActions from '../actions/auth';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

@connect(state => ({
  profile: state.profile,
  login: state.login
}))

export default class Login extends Component {

  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }


  render() {

    console.log("LOGIN");
    console.log(this.props);

    const loginStyle = {
      container : {
        marginTop : "10px",
      }
    };

    const {login: { username }, dispatch} = this.props;
    const actions = bindActionCreators(loginActions, dispatch);
    //const actions = bindActionCreators(authActions, dispatch);

    return (
      <div className="ui middle aligned center aligned grid" style ={loginStyle.container}>

        <Form>
          <h2>
            Sign In
          </h2>
          <Form.Field>
            <Input type="text" name="email" value={this.state.email}
                   placeholder="email"
                   onChange={this.handleChange.bind(this)}/>
          </Form.Field>
          <Form.Field>
            <Input type="password" name="password" value={this.state.password}
                   placeholder="Password"
                   onChange={this.handleChange.bind(this)}/>
          </Form.Field>
          <p>Sign Up</p>
          <Button color='teal' type="submit" onClick={() => actions.login(this.state.email, this.state.password)}>Connexion</Button>
          <Button type="submit" onClick={() => actions.deleteAccount(this.state.email, this.state.password)}>Delete Account</Button>
        </Form>
      </div>
    );
  }

}


