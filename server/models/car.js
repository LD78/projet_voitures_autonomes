/**
 * Created by jakubowicz on 12/12/2016.
 */

const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const carSchema = new Schema({
	carName: String, // +
	carId: {type: Number, unique: true}, // +

	fleetName: String, // oid
	fleetId: {type: Number, unique: true}, // +

	disponibility: Boolean,
	position: String,

	trajetId: [{type: ObjectId, ref: 'Trajet'}]
    // ObjectID qui peut remplacer des informations pour l'intégrer dans postman
    // trajet oid

});

module.exports = {
	schema: carSchema,
	model: mongoose.model('Car', carSchema),
	registry: {
		urlTemplates: {
			self: 'http://127.0.0.1:3000/api/cars/{id}',
			relationship: 'http://127.0.0.1:3000/api/cars/{ownerId}/relationships/{path}'
		}
	}
};
