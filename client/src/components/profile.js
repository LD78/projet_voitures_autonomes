/**
 * Created by Yaku on 18/01/2017.
 */
import React, {Component, PropTypes} from 'react';
import { Button, Input, Form, Progress } from 'semantic-ui-react'

import * as profileActions from '../actions/profile';
import * as carActions from '../actions/car';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import axios from 'axios';

@connect(state => ({
  profile: state.profile,
  login: state.login,
  car: state.car,
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
      carNewId: "",
      fleetName: "",
      fleetNewName: "",
      tripCar:"",
      tripFleet:"",
      tripDestination:"",
      cars:[],
      loading: 0
    };
  }

  data = {};
/*
  componentWillMount() {
  }*/

  componentDidMount() {
    setInterval(function() { this.setState({loading: this.state.loading + 1}); }.bind(this), 500);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  render () {

   /* axios.get('http://localhost:5000/api/cars/', {
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
    }*/

    const { profile: { carArray,tripArray }, dispatch} = this.props;// Permet de dispacth info au fils
    const actions = bindActionCreators(profileActions, dispatch);// Permet de lancer les actions
    //const carActions = bindActionCreators(carActions, dispatch);

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
    };
    /*
    const trajets = [];

    trajets.push(
      <div key={trajets.lenght}>
        <Progress percent={80} active style ={loginStyle.divPart}>
          Trip in progress
        </Progress>
      </div>
    )
    */
    return (

      <div className="ui middle aligned center aligned grid" style ={loginStyle.container}>

        <div>
          <h1>Test Application React </h1>

          <h2>Manage your Action </h2>


          <div style ={loginStyle.divPart}>
            <Button color='green' type="submit" onClick={() => alert("added !")}>Add Car In Fleet</Button>

            <Form.Field>
              <Input type="carFleet" name="carFleet" placeholder="Car Name" onChange={this.handleChange.bind(this)}/>
              <Input type="fleetCar" name="fleetCar" placeholder="Fleet Name" onChange={this.handleChange.bind(this)}/>
            </Form.Field>
          </div>

          <div style ={loginStyle.divPart}>
            <Button color='green' type="submit" onClick={() =>console.log("Add trajet submit"+ this.state.tripDestination)
            + actions.addTrajet(this.state.tripDestination, this.state.tripCar, this.state.tripFleet)}
            >Launch Trip</Button>

            <Form.Field>
              <Input type="destination" name="tripDestination" placeholder="Destination" onChange={this.handleChange.bind(this)}/>
              <div>
                <Input type="carTrip" name="tripCar" placeholder="Car" onChange={this.handleChange.bind(this)}/>
                <Input type="fleetTrip" name="tripFleet" placeholder="Fleet" onChange={this.handleChange.bind(this)}/>
              </div>
            </Form.Field>

            {this.props.profile.tripArray}

            <Progress percent={this.state.loading} active style = {loginStyle.divPart}>
              Trip in progress
            </Progress>

            {this.state.loading}

          </div>
        </div>

      </div>
    );

  }
}

