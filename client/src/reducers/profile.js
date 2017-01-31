/**
 * Created by Yaku on 18/01/2017.
 */
import * as types from '../constants/profile';
import axios from 'axios';

const initialState = {
	currentUser: 'User',
	numCar: 0,
	numFleet: 0,
	carArray: [],
  tripArray: [],
	fleetArray: ['FirstFleet'],
	testDeOuf: false
};

export default function profile(state = initialState, action) {
	switch (action.type) {

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
                    console.log("action.name: " + action.name);

                    response.data.data.forEach(function(element) {

                        console.log("element: " + element.attributes.carId);

                        if(element.attributes.carId == action.name){
                            console.log("PATCH_CAR_IF");
                            console.log(element.attributes.carId);
                            axios.patch('http://localhost:5000/api/cars/'+element.id, {
                                    data: {
                                        type: 'cars',
                                        id: element.id,
                                        attributes: {
                                            carId: action.newName
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
                ...state, testDeOuf: true
            };

		case types.ADD_FLEET:
			state.fleetArray.push(action.name);
            axios.post('http://localhost:5000/api/fleets', {
                    data: {
                        type: 'fleets',
                        attributes: {
                            fleetId: action.name
                        }
                    }
                },
                {
                    headers: {
                        'Content-Type': 'application/vnd.api+json'}
                })
                .then(function (response) {
                    console.log('GOOD');
                    console.log(response);
                })
                .catch(function (error) {
                    console.log('FAIL');
                    console.log(error);
                });
			return {
				...state
			};

        case types.PATCH_FLEET:
          alert("REDUCER --> PATCH_FLEET");
          console.log("PATCH_FLEET_________");
            axios.get('http://localhost:5000/api/fleets')
                .then(function (response) {

                  console.log("PATCH_FLEET_then");
                  console.log("action.name: " + action.name);

                    response.data.data.forEach(function(element) {

                      console.log("element: " + element.attributes.fleetId);

                        if(element.attributes.fleetId == action.name){
                            console.log("PATCH_FLEET_IF");
                            console.log(element.attributes.fleetId);
                            axios.patch('http://localhost:5000/api/fleets/'+element.id, {
                                    data: {
                                        type: 'fleets',
										id: element.id,
                                        attributes: {
                                            fleetId: action.newName
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
                ...state, testDeOuf: true
            };

		case types.DELETE_FLEET: 
        	 axios.get('http://localhost:5000/api/fleets') 
						   .then(function (response) {
                 response.data.data.forEach(function(element) { 

						   		if(element.attributes.fleetId == action.name){ 
						   			console.log(element.attributes.fleetId);  
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
        		...state, testDeOuf: true 
        	};

		case types.ADD_TRAJET:

      axios.get('http://localhost:5000/api/cars')
        .then(function (response) {
          response.data.data.forEach(function(element) {

            if(element.attributes.carId == action.car){

              axios.post('http://localhost:5000/api/trajets', {
                  data: {
                    type: 'trajets',
                    attributes: {
                      trajetId: action.destination + action.car,
                      arrival: action.destination
                    }
                  }
                },
                {
                  headers: {
                    'Content-Type': 'application/vnd.api+json'}
                })
                .then(function (response) {
                  console.log(response);
                  state.tripArray.push('*' + action.destination + action.car + '*');
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
