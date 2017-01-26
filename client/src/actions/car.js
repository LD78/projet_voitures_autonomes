/**
 * Created by jakubowicz on 26/01/2017.
 */
import * as types from '../constants/car';

export function getCarsDB() {
    alert('Action --> cars');
    return {
        type: types.GET_CARS
    };
}

