/**
 * Created by Yaku on 28/12/2016.
 */

import React from 'react';
import { Button, Input, Form } from 'semantic-ui-react'
import {connect} from 'react-redux'


class Profile extends React.Component {

  /* PROF EXAMPLE
   componentDidMount(){ // componentDidMount "Fait une action avant l'affichage"
   axios.get("/user/" + this.props.user + "/vehicule").then(data => {
   //DAta est l'ensemble des voitures de l'utilisateur connecté
   this.props.updateState(data);
   })
   }
   */
  constructor() {
    super();
    this.state = {
      numCar: 0,
      numFleet: 0
    };
  }

  addCarEvent(e) {
    e.preventDefault();
    this.props.addCar(this.props.numCar);
  }
  delCarEvent(e) {
    e.preventDefault();
    this.props.delCar(this.props.numCar);
  }
  addFleetEvent(e) {
    e.preventDefault();
    this.props.addFleet(this.props.numFleet);
  }
  delFleetEvent(e) {
    e.preventDefault();
    this.props.delFleet(this.props.numFleet);
  }

  render(){
    return (
      <div>
        <h2> Profile </h2>
        <div>
          <p> You are </p>
          {this.props.username}
        </div>
        <div>
          <Button color='blue' type="submit" onClick={this.addCarEvent.bind(this)}>Add Car</Button>
          <Button color='red' type="submit" onClick={this.delCarEvent.bind(this)}>Del Car</Button>
        </div>
        {this.props.numCar}
        <div>
          <Button color='blue' type="submit" onClick={this.addFleetEvent.bind(this)}>Add Fleet</Button>
          <Button color='red' type="submit" onClick={this.delFleetEvent.bind(this)}>Del Fleet</Button>
        </div>
        {this.props.numFleet}
      </div>
    )
  }
  // --> lecture information
  /*
   mapStateToProps = (state) => {
   user : state.user
   };
   */
  // --> modification information
  /* mapDispatchToProps = (dispatch) => {
   updateState: (data) => {
   return dispatch({
   type : "ADD_VOITURE",
   data
   })
   }
   }
   connect(mapStateToProps, mapDispatchToProps)(profile);
   */
}

const mapStateToProps = state => ({

  username: state.auth.username,
  numCar: state.handleProfile.numCar,
  numFleet: state.handleProfile.numFleet
});

//dispatch is the only way to trigger a state change.

const mapDispatchToProps = dispatch => ({

  addCar : (numCar) => {
    dispatch({
      type: "ADD_CAR",
      numCar
    })
  },
  delCar : (numCar) => {
    dispatch({
      type: "DEL_CAR",
      numCar
    })
  },
  addFleet : (numFleet) => {
    dispatch({
      type: "ADD_FLEET",
      numFleet
    })
  },
  delFleet : (numFleet) => {
    dispatch({
      type: "DEL_FLEET",
      numFleet
    })
  }

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile)
