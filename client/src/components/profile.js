/**
 * Created by Yaku on 18/01/2017.
 */
import React, {Component, PropTypes} from 'react';
import { Button, Input, Form } from 'semantic-ui-react'

import * as profileActions from '../actions/profile';
import * as carActions from '../actions/car';

import * as api from '../actions/api';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import axios from 'axios';

@connect(state => ({
  profile: state.profile,
  login: state.login,
    car: state.car
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
      fleetName: "",
      cars:[]
    };
  }

  data = {};
/*
  componentWillMount() {
  }*/

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  render () {

    axios.get('http://localhost:5000/api/cars/', {
    })
      .then(function (response) {
        console.log("GET");
        getCars(response.data.data);
        //getCars(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });



    function getCars(arrayDb){
      console.log("getCars");
      arrayDb.forEach(function(element) {
        console.log(element.attributes.carId);
        this.state.cars.push(element.attributes.carId);
      });
    }

    function getCar(array, carId){
      console.log("getCar");
      array.forEach(function(element) {
        if(element.attributes.carId == carId){
          console.log(element.attributes.carId);
        }
      });
    }

    const { profile: { carArray }, dispatch} = this.props;// Permet de dispacth info au fils
    const actions = bindActionCreators(profileActions, dispatch);// Permet de lancer les actions
      const carActions = bindActionCreators(carActions, dispatch);

    alert(this.state.cars);
    console.log("PROFILE");
    console.log(this.props);
    console.log(this.state);

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

            <Button color='red' type="submit" onClick={() => carActions.getCarsDB()
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

  }
}

