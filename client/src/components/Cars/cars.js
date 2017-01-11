import React, { PropTypes } from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import * as actions from '../../actions';
import CarList from './CarList';

class Cars extends React.Component {

    render() {
        return (
            <div>
                <h1>Les voitures</h1>
                <Link to={'/cars/new'} className="btn">
                    <button>ajouter une voiture</button>
                </Link>
                <div> <CarList cars={this.props.cars} /> </div>
                <div className="col-md-8">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

Cars.propTypes = {
    cars: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
    return { cars: state.cars };
}

export default connect(mapStateToProps)(Cars);
