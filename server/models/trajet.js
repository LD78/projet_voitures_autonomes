/**
 * Created by jakubowicz on 12/12/2016.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const trajetSchema = new Schema({
    trajetName: String, //+
    trajetId: {type: Number, unique: true}, //+

    departure: String,
    arrived: String,

    listCarId: [{ type: ObjectId, ref: 'List of cars' }], //+

    otherInfo: [{ type: ObjectId, ref: 'Info' }]
    //ObjectID qui peut remplacer les données diverses pour l'intégrer dans postman
});

module.exports = {
    schema: trajetSchema,
    model: mongoose.model('Trajet', trajetSchema),
    registry: {
        urlTemplates: {
            "self": "http://127.0.0.1:3000/api/trajets/{id}",
            "relationship": "http://127.0.0.1:3000/api/trajets/{ownerId}/relationships/{path}"
        }
    }
};
