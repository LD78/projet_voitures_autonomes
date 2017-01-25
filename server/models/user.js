/**
 * Created by jakubowicz on 12/12/2016.
 */

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
	email: {type: String, unique: true},
	username: String,
	password: String,
	fleetName: String
});

module.exports = {
	schema: userSchema,
	model: mongoose.model('User', userSchema),
	registry: {
		urlTemplates: {
			self: 'http://127.0.0.1:5000/api/users/{id}',
			relationship: 'http://127.0.0.1:5000/api/users/{ownerId}/relationships/{path}'
		}
	}
};
