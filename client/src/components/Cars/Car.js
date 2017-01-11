import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as carActions from '../../actions';

class Car extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      car: Object.assign({}, this.props.car),
      saving: false,
      isEditing: false
    };
    this.saveCar = this.saveCar.bind(this);
    this.updateCarState = this.updateCarState.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.deleteCar = this.deleteCar.bind(this);
    this.redirect = this.redirect.bind(this);
  }


  componentWillReceiveProps(nextProps) {
    if (this.props.car.id != nextProps.car.id) {
      this.setState({car: Object.assign({}, nextProps.car)});
    }
    this.setState({saving: false, isEditing: false});
  }

  toggleEdit() {
    this.setState({isEditing: true});
  }

  updateCarState(event) {
    const field = event.target.name;
    const car = this.state.car;
    car[field] = event.target.value;
    return this.setState({car: car});
  }

  saveCar(event) {
    event.preventDefault();
    this.setState({saving: true});
    this.props.actions.updateCar(this.state.car);

  }

  deleteCar(event) {
    this.props.actions.deleteCar(this.state.car)
  }

  redirect() {
    browserHistory.push('/cars');
  }

  render() {
    if (this.state.isEditing) {
      return (
      <div>
        <h1>edit car</h1>
      </div>
      )
    }
    return (
      <div>
        <h1>{this.state.car.id}</h1>
        <button onClick={this.toggleEdit} >edit</button>
        <button onClick={this.deleteCar} >delete</button>
      </div>
    );
  }
}


Car.propTypes = {
  car: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function getCarById(cars, id) {
  let car = cars.find(car => car.id == id)
  return Object.assign({}, car)
}

function mapStateToProps(state, ownProps) {
  let car = {fleetName: ''};
  const carId = ownProps.params.id;
  if (carId && state.cars.length > 0) {
    car = getCarById(state.cars, ownProps.params.id);
  }
    return {car: car};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(carActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Car);
