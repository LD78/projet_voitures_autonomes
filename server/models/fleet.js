/**
 * Created by jakubowicz on 12/12/2016.
 */

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const fleetSchema = new Schema({
	fleetName: {type: String, unique: true},
	fleetId: {type: String}
});

module.exports = {
	schema: fleetSchema,
	model: mongoose.model('Fleet', fleetSchema),
	registry: {
		urlTemplates: {
			self: 'http://127.0.0.1:5000/api/fleets/{id}',
			relationship: 'http://127.0.0.1:5000/api/fleets/{ownerId}/relationships/{path}'
		}
	}
};
