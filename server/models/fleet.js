/**
 * Created by jakubowicz on 12/12/2016.
 */

const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const fleetSchema = new Schema({

	fleetName: String, // +
	fleetId: {type: Number, unique: true}, // +

	listCarId: [{type: ObjectId, ref: 'List of cars'}],
    // ObjectID qui peut remplacer les données diverses pour l'intégrer dans postman
    // list car oid

	listTrajetId: [{type: ObjectId, ref: 'List of trajets'}] // +
    // trajet oid
});

module.exports = {
	schema: fleetSchema,
	model: mongoose.model('Fleet', fleetSchema),
	registry: {
		urlTemplates: {
			self: 'http://127.0.0.1:3000/api/fleets/{id}',
			relationship: 'http://127.0.0.1:3000/api/fleets/{ownerId}/relationships/{path}'
		}
	}
};
