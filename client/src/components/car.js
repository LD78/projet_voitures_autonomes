/**
 * Created by jakubowicz on 30/01/2017.
 */
import React, {Component, PropTypes} from 'react';
import { Button, Input, Form } from 'semantic-ui-react'

//import * as profileActions from '../actions/profile';
import * as carActions from '../actions/car';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

@connect(state => ({
    profile: state.profile,
    login: state.login,
    car: state.car
}))

export default class Profile extends Component {

    constructor() {
        super();
        this.state = {
            carId: "",
            carNewId: ""
        };
    }

    data = {};

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    render () {

        const { profile: { carArray }, dispatch} = this.props;// Permet de dispacth info au fils
        const actions = bindActionCreators(carActions, dispatch);// Permet de lancer les actions
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
        }

        return (

            <div className="ui middle aligned center aligned grid" style ={loginStyle.container}>

                <div>
                    <h1>Application React </h1>

                    <h2>Manage your Cars </h2>

                    <div style ={loginStyle.divPart}>
                        <Button color='blue' type="submit" onClick={() => actions.addCar(this.state.carId)
                        }>Create Car</Button>

                        <Button color='red' type="submit" onClick={() => carActions.deleteCar(this.state.carId)
                        }>Delete Car</Button>

                        <Button color='yellow' type="submit" onClick={() => alert(this.state.carId) + actions.patchCar(this.state.carId, this.state.carNewId)
                        }>Update Car</Button>

                        <Form.Field>
                            <Input type="car" name="carId" placeholder="Number plate" onChange={this.handleChange.bind(this)}/>
                        </Form.Field>

                        <Form.Field>
                            <Input type="car" name="carNewId" placeholder="New Number plate" onChange={this.handleChange.bind(this)}/>
                        </Form.Field>

                        {this.props.profile.carArray}

                    </div>

                </div>

            </div>
        );

    }
}

