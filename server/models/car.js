/**
 * Created by jakubowicz on 12/12/2016.
 */

const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const carSchema = new Schema({
	carId: {type: String, unique: true},
  fleetName: String,
	disponibility: Boolean,
	position: String,
	distanceParcourue: Number,
	trajetId: [{type: ObjectId, ref: 'Trajet'}]

	// ObjectID qui peut remplacer des informations pour l'intégrer dans postman
});

module.exports = {
	schema: carSchema,
	model: mongoose.model('Car', carSchema),
	registry: {
		urlTemplates: {
			self: 'http://127.0.0.1:5000/api/cars/{id}',
			relationship: 'http://127.0.0.1:5000/api/cars/{ownerId}/relationships/{path}'
		}
	}
};
