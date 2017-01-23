
import React, {Component, PropTypes} from 'react';
import { Button, Input, Form } from 'semantic-ui-react'

import * as loginActions from '../actions/login';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

@connect(state => ({
  login: state.login
}))

export default class Login extends Component {

  constructor() {
    super();
    this.state = {
      user: "",
      password: ""
    };
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  login(e) {
    e.preventDefault();
    //this.props.login(this.state.user, this.state.password);
    this.actions.login(this.state.user, this.state.password)
  }
  //<Button color='teal' type="submit" onClick={this.login.bind(this)}>Connexion</Button>



  render() {

    const loginStyle = {
      container : {
        marginTop : "10px",
      }
    }

    const {login: { username }, dispatch} = this.props;
    const actions = bindActionCreators(loginActions, dispatch);

    return (
      <div className="ui middle aligned center aligned grid" style ={loginStyle.container}>

        <Form>
          <h2>
            Se connecter
          </h2>
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
          <p>S'enregistrer</p>
          <Button color='teal' type="submit" onClick={() => actions.login(this.state.user, this.state.password)}>Connexion</Button>
        </Form>
      </div>
    );
  }

}


