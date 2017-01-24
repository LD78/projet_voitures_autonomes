/**
 * Created by jakubowicz on 12/12/2016.
 */

const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const userSchema = new Schema({
	email: {type: String, unique: true},
	username: String,

	fleetName: String, // +


	otherInfo: [{type: ObjectId, ref: 'Info'}]
    // ObjectID qui peut remplacer l'email, le username et la fleetName pour l'intégrer dans postman
});

module.exports = {
	schema: userSchema,
	model: mongoose.model('User', userSchema),
	registry: {
		urlTemplates: {
			self: 'http://127.0.0.1:3000/api/users/{id}',
			relationship: 'http://127.0.0.1:3000/api/users/{ownerId}/relationships/{path}'
		}
	}
};
