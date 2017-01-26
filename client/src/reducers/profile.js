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
	fleetArray: ['FirstFleet'],
	testDeOuf: false
};

export default function profile(state = initialState, action) {
	switch (action.type) {

		case types.ADD_CAR:
			alert('Reducer --> ADD_CAR ');
			state.carArray.push('*' + action.id + '*');
      // state.carArray.push(action.id);
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
			console.log('GOOD');
			console.log(response);
			})
			.catch(function (error) {
			console.log('FAIL');
			console.log(error);
		    });

			return {
				...state
        // numCar: action.numCar + 1
			};

		case types.ADD_FLEET:
			alert('Reducer --> ADD_FLEET ' + action.name);
			state.fleetArray.push(action.name);
			alert(state.fleetArray);
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

		case types.DELETE_FLEET: 
        	alert('Reducer --> DELETE_FLEET ' + action.name);
        	           axios.get('http://localhost:5000/api/fleets') 
						   .then(function (response) { 
						   	console.log('GOOD GET'); 
						   	console.log(response); 
						   	response.data.data.forEach(function(element) { 
						   		if(element.attributes.fleetId == action.name){ 
						   			console.log(element.attributes.fleetId);  
						   			axios.delete('http://localhost:5000/api/fleets/'+response.data.data[element].id) 
										.then(function (response) { 
											console.log('GOOD DELETE'); 
											console.log(response); 
										}) 
										.catch(function (error) { 
											console.log('FAIL DELETE'); 
											console.log(error); 
										}); 
						   		} 
						   	}) 
						   }) 
						   .catch(function (error) { 
						   	console.log('FAIL GET'); 
						   	console.log(error); 
						   });  
        	return { 
        		...state, testDeOuf: true 
        	};

		case types.ADD_TRAJET:
    	alert("Add_trajet");
    	alert(action.car);
    	console.log("Add_TRAJET");
      console.log(action.car);

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

		default:
			return state;
	}
}
