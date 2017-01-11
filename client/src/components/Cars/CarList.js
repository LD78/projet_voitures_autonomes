import React, { PropTypes } from 'react';

const CarList = ({cars}) => {
    return (
        <ul className="cars">
            { cars.map( car =>
                <li className="car-item" key={car.id} >
                   <ul>
                    <li><b>ID :</b> {car.id} </li>
                    <li> <b> Nom de flotte:</b> {car.attributes.fleetName}</li>
                    <li><b>  Position: </b>{car.attributes.position}</li>
                    <li><b>  Disponibilité:</b> {car.attributes.disponibility ? "oui" : "non"} </li>
                    </ul>
                </li>
            )}
        </ul>
    );
}

CarList.propTypes = {
    cars: PropTypes.array.isRequired
};

export default CarList;
