/**
 * Created by Yaku on 18/01/2017.
 */
import React, {Component, PropTypes} from 'react';
import { Button, Input, Form } from 'semantic-ui-react'

import * as fleetActions from '../actions/fleet';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

@connect(state => ({
  fleet: state.fleet
}))

export default class Profile extends Component {

  constructor() {
    super();
    this.state = {
      fleetName: "",
      fleetNewName: "",
    };
  }

  /*
   componentWillMount() {
   }*/

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  render () {

    const { fleet: { carArray }, dispatch} = this.props;// Permet de dispacth info au fils
    const actions = bindActionCreators(fleetActions, dispatch);// Permet de lancer les actions

    console.log("FLEET");
    console.log(this.props);
    console.log(this.state);

    const fleetStyle = {
      container : {
        marginTop : "10px",
      },
      divPart:{
        marginTop : "10px",
      }
    }

    return (

      <div className="ui middle aligned center aligned grid" style ={fleetStyle.container}>

        <div>
          <h1>Test Application React </h1>

          <h2>Action for Fleet</h2>

          <div style ={fleetStyle.divPart}>
            <Button color='blue' type="submit" onClick={() => alert("fleetName Component : " + this.state.fleetName) + actions.addFleet(this.state.fleetName)
            }>Create Fleet</Button>

            <Button color='red' type="submit" onClick={() => actions.deleteFleet(this.state.fleetName)
            }>Delete Fleet</Button>

            <Button color='yellow' type="submit" onClick={() => actions.patchFleet(this.state.fleetName, this.state.fleetNewName)
            }>Update Fleet</Button>

            <Form.Field>
              <Input type="fleet" name="fleetName" placeholder="Fleet Name" onChange={this.handleChange.bind(this)}/>
            </Form.Field>

            <Form.Field>
              <Input type="fleet" name="fleetNewName" placeholder="New Fleet Name" onChange={this.handleChange.bind(this)}/>
            </Form.Field>
          </div>

        </div>

      </div>
    );

  }
}

