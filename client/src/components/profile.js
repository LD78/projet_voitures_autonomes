/**
 * Created by Yaku on 18/01/2017.
 */
import React, {Component, PropTypes} from 'react';
import { Button, Input, Form, Progress } from 'semantic-ui-react'

import * as profileActions from '../actions/profile';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


@connect(state => ({
  profile: state.profile,
  login: state.login,
  car: state.car,
}))

export default class Profile extends Component {

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
      loading: 0,
      isLoading: false
    };
  }

  data = {};

  componentDidMount() {
    setInterval(function() { if(this.state.isLoading == true && this.state.loading<100){this.setState({loading: this.state.loading + 1}); }}.bind(this), 500);
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  render () {


    const { profile: { carArray,tripArray, tripIsLoading }, dispatch} = this.props;// Permet de dispacth info au fils
    const actions = bindActionCreators(profileActions, dispatch);// Permet de lancer les actions

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

    return (

      <div className="ui middle aligned center aligned grid" style ={loginStyle.container}>

        <div>
          <h1>Test Application React </h1>

          <h2>Manage your Action </h2>

          <div style ={loginStyle.divPart}>
            <Button color='green' type="submit" onClick={() => this.state.isLoading = true + console.log("Add trajet submit"+ this.state.tripDestination)
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
              Trip is in progress
            </Progress>

            {this.state.loading}

          </div>
        </div>

      </div>
    );

  }
}

