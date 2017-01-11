
const initState = {
    cars: []
}; 

export default function CarsReducer(state = initState, action) {
    switch(action.type) {
        case 'LOAD_CARS_SUCCESS':
            return action.cars.data;
        default:
            return state;
    }
}
