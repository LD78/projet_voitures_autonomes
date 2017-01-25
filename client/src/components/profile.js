/**
 * Created by Yaku on 18/01/2017.
 */
import React, {Component, PropTypes} from 'react';
import { Button, Input, Form } from 'semantic-ui-react'

import * as profileActions from '../actions/profile';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import axios from 'axios';

@connect(state => ({
  profile: state.profile,
  login: state.login
}))

export default class Profile extends Component {
/*
  static propTypes = {
    addCar: PropTypes.func.isRequired
  }
*/
  constructor() {
    super();
    this.state = {
      carId: "",
      fleetName: ""
    };
  }

  data = {};
//https://github.com/mzabriskie/axios
  componentWillMount() {
    /*axios.get("http://localhost:5000/api/cars").then(response => {
      this.setState({ data: response.data.cars });
      console.log("componentWillMount");
      console.log(this.data);
    })*/

    axios.get('http://localhost:5000/api/cars', {
      params: {
        filter: {
          simple: {carId: 'agx78310kikololo'}
        }
      }
    })
      .then(function (response) {
        console.log("GET");
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  render () {

    const { profile: { carArray }, dispatch} = this.props;// Permet de dispacth info au fils
    const actions = bindActionCreators(profileActions, dispatch);// Permet de lancer les actions

    console.log("PROFILE");
    console.log(this.props);
    //console.log(this.props.profile.utilisateur);
    //console.log("PROFILE TEST"+this.props.login.authenticated);

    const loginStyle = {
      container : {
        marginTop : "10px",
      },
      divPart:{
        marginTop : "10px",
      }
    }

    return (

      <div className="ui middle aligned center aligned grid" style ={loginStyle.container}>

        <div>
          <h1>Test Application React </h1>

          <h2>Manage your Action </h2>

          <div style ={loginStyle.divPart}>
            <Button color='blue' type="submit" onClick={() => actions.addCar(this.state.carId)
            }>Create Car</Button>

            <Button color='red' type="submit" onClick={() => alert("car delete:" + this.state.carId)
            }>Delete Car</Button>

            <Form.Field>
              <Input type="car" name="carId" placeholder="Number plate" onChange={this.handleChange.bind(this)}/>
            </Form.Field>

            {this.props.profile.carArray}

          </div>

          <div style ={loginStyle.divPart}>
            <Button color='blue' type="submit" onClick={() => actions.addFleet(this.state.fleetName)
            }>Create Fleet</Button>

            <Button color='red' type="submit" onClick={() => alert("fleet delete:" + this.state.fleetName)
            }>Delete Fleet</Button>

            <Form.Field>
              <Input type="fleet" name="fleetName" placeholder="Fleet Name" onChange={this.handleChange.bind(this)}/>
            </Form.Field>
          </div>

          <div style ={loginStyle.divPart}>
            <Button color='green' type="submit" onClick={() => alert("added !")}>Add Car In Fleet</Button>

            <Form.Field>
              <Input type="carFleet" name="carFleet" placeholder="Car Name" onChange={this.handleChange.bind(this)}/>
              <Input type="fleetCar" name="fleetCar" placeholder="Fleet Name" onChange={this.handleChange.bind(this)}/>
            </Form.Field>
          </div>

          <div style ={loginStyle.divPart}>
            <Button color='green' type="submit" onClick={() => alert("trip launched !")}>Launch Trip</Button>

            <Form.Field>
              <Input type="destination" name="destination" placeholder="Destination" onChange={this.handleChange.bind(this)}/>
              <div>
                <Input type="carTrip" name="carTrip" placeholder="Car" onChange={this.handleChange.bind(this)}/>
                <Input type="fleetTrip" name="fleetTrip" placeholder="Fleet" onChange={this.handleChange.bind(this)}/>
              </div>
            </Form.Field>
          </div>

        </div>

      </div>
    );



    /*return (
      <div className="ui middle aligned center aligned grid">
        <h1>Test Application React </h1>
        <div>

          <h2>CRUD Action </h2>

          <Button color='blue' type="submit" onClick={() => alert("click profile button")
          + this.props.addCar("toyota hybride")
          }>Create Car</Button>

          <Form.Field>
            <Input type="car" name="carId" placeholder="Car"/>
          </Form.Field>

          <Button color='red' type="submit" onClick={() => alert("click profile button")
          }>Delate Car</Button>

          <Form.Field>
            <Input type="car" name="carId" placeholder="Car"/>
          </Form.Field>

        </div>
      </div>
    );*/
  }
}

