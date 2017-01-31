/**
 * Created by Yaku on 18/01/2017.
 */
import * as types from '../constants/fleet';
//import * as apiDB from '../actions/apiDB';
import axios from 'axios';

const initialState = {
  fleetName: "",
  fleetNewName: "",
  carId: ""
};

export default function getCar(state = initialState, action) {
  switch (action.type) {

    case types.GET_FLEETS:
      console.log('GET_CARS');

      return {
        ...state
      };

    case types.ADD_FLEET:
      //state.carArray.push('*' + action.id + '*');
      alert("REDUCER --> ADD_FLEET: " + action.name);
      axios.post('http://localhost:5000/api/fleets', {
          data: {
            type: 'fleets',
            attributes: {
              fleetName: action.name
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
      };

    case types.DELETE_FLEET:
      axios.get('http://localhost:5000/api/fleets')
        .then(function (response) {
          response.data.data.forEach(function(element) {

            if(element.attributes.fleetName == action.name){
              axios.delete('http://localhost:5000/api/fleets/'+element.id)
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

    case types.PATCH_FLEET:
      alert("REDUCER --> PATCH_FLEET");
      axios.get('http://localhost:5000/api/fleets')
        .then(function (response) {

          response.data.data.forEach(function(element) {

            if(element.attributes.fleetName == action.name){
              axios.patch('http://localhost:5000/api/fleets/'+element.id, {
                  data: {
                    type: 'fleets',
                    id: element.id,
                    attributes: {
                      fleetName: action.newName
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

      case types.ADD_CAR_IN_FLEET:
          //state.carArray.push('*' + action.id + '*');
          alert("REDUCER --> ADD_CAR_IN_FLEET: " + action.carId);
          alert("REDUCER --> ADD_CAR_IN_FLEET: " + action.fleetName);
          axios.post('http://localhost:5000/api/cars', {
                  data: {
                      type: 'cars',
                      attributes: {
                          carId: action.carId,
                          fleetName: action.fleetName
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
          axios.post('http://localhost:5000/api/fleets', {
                  data: {
                      type: 'fleets',
                      attributes: {
                          fleetName: action.fleetName
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
          };

    default:
      return state;
  }
}
