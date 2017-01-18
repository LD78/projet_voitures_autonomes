/**
 * Created by jakubowicz on 06/12/2016.
 */

const express = require('express');

const app = express();
const API = require('json-api');
const mongoose = require('mongoose');

const APIError = API.types.Error;
mongoose.connect('mongodb://localhost/voiture-api');

const models = {
	User: require('./models/user').model,
	Car: require('./models/car').model,
	Fleet: require('./models/fleet').model,
	Trajet: require('./models/trajet').model
};

const registryTemplates = {
	users: require('./models/user').registry,
	cars: require('./models/car').registry,
	fleets: require('./models/fleet').registry,
	trajets: require('./models/trajet').registry
};

const adapter = new API.dbAdapters.Mongoose(models);
const registry = new API.ResourceTypeRegistry(registryTemplates, {dbAdapter: adapter});

const docs = new API.controllers.Documentation(registry, {name: 'Aze'}); // nom pour la doc
const controller = new API.controllers.API(registry);
const front = new API.httpStrategies.Express(controller, docs);

const apiReqHandler = front.apiRequest.bind(front);

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Cache-Control');
	res.header('Access-Control-Allow-Methods',
    'POST, GET, PATCH, DELETE, OPTIONS');
	next();
});

app.use(require('morgan')('combined'));

const db = [
	'users',
	'cars',
	'fleets',
	'trajets'
];

app.use(express.static('../client'));

app.options('*', (req, res) => {
	res.send();
});

app.get('/api', front.docsRequest.bind(front));

app.route(`/api/:type(${db.join('|')})`).get(apiReqHandler).post(apiReqHandler)
    .patch(apiReqHandler);

app.route(`/api/:type(${db.join('|')})/:id`).get(apiReqHandler).patch(apiReqHandler)
    .delete(apiReqHandler);

app.route(`/api/:type(${db.join('|')})/:id/relationships/:relationship`)
    .get(apiReqHandler).post(apiReqHandler).patch(apiReqHandler)
    .delete(apiReqHandler);

app.use((req, res) => { 			// app.use((req, res, next) => {
	front.sendError(new APIError(404, undefined, 'Not Found'), req, res);
});

app.listen(3000);

console.log('Started on port ' + 3000);
