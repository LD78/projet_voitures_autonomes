/**
 * Created by jakubowicz on 12/12/2016.
 */

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const trajetSchema = new Schema({
	trajetName: String,
	trajetId: {type: String, unique: true},
	departure: String,
	arrival: String,
	distanceTrajetKm: Number
});

module.exports = {
	schema: trajetSchema,
	model: mongoose.model('Trajet', trajetSchema),
	registry: {
		urlTemplates: {
			self: 'http://127.0.0.1:5000/api/trajets/{id}',
			relationship: 'http://127.0.0.1:5000/api/trajets/{ownerId}/relationships/{path}'
		}
	}
};
