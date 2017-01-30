/**
 * Created by Yaku on 18/01/2017.
 */
import * as types from '../constants/car';
//import * as apiDB from '../actions/apiDB';
import axios from 'axios';

const initialState = {
    carId: "",
    carNewId: "",
    carArray: []
};

export default function getCar(state = initialState, action) {
    switch (action.type) {

        case types.GET_CARS:
            console.log('GET_CARS');

            return {
                ...state
            };

        case types.ADD_CAR:
            state.carArray.push('*' + action.id + '*');
            axios.post('http://localhost:5000/api/cars', {
                    data: {
                        type: 'cars',
                        attributes: {
                            carId: action.id
                        }
                    }
                },
                {
                    headers: {
                        'Content-Type': 'application/vnd.api+json'}
                })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });

            return {
                ...state
                // numCar: action.numCar + 1
            };

        case types.PATCH_CAR:
            alert("REDUCER --> PATCH_CAR");
            console.log("PATCH_CAR_________");
            axios.get('http://localhost:5000/api/cars')
                .then(function (response) {

                    console.log("PATCH_CAR_then");
                    console.log("action.name: " + action.id);

                    response.data.data.forEach(function(element) {

                        console.log("element: " + element.attributes.id);

                        if(element.attributes.carId == action.id){
                            console.log("PATCH_CAR_IF");
                            console.log(element.attributes.id);
                            axios.patch('http://localhost:5000/api/cars/'+element.id, {
                                    data: {
                                        type: 'cars',
                                        id: element.id,
                                        attributes: {
                                            carId: action.newId
                                        }
                                    }
                                },
                                {
                                    headers: {
                                        'Content-Type': 'application/vnd.api+json'}
                                })
                                .then(function (response) {
                                    console.log("GOOD");
                                    console.log(response);
                                })
                                .catch(function (error) {
                                    console.log(error);
                                });
                        }
                    })
                })
                .catch(function (error) {
                    console.log(error);
                });
            return {
                ...state
            };

        case types.DELETE_CAR:
            alert("REDUCERS ---> DELETE_CAR");
            axios.get('http://localhost:5000/api/cars')
                .then(function (response) {
                    alert("REDUCERS ---> DELETE_CAR, reponse");
                    response.data.data.forEach(function(element) {

                        if(element.attributes.carId == action.id){
                            alert("REDUCERS ---> DELETE_CA if");
                            console.log(element.attributes.id);
                            axios.delete('http://localhost:5000/api/cars/'+element.id)
                                .then(function (response) {
                                    console.log(response);
                                })
                                .catch(function (error) {
                                    console.log(error);
                                });
                        }
                    })
                })
                .catch(function (error) {
                    console.log(error);
                });
            return {
                ...state
            };

        default:
            return state;
    }
}
