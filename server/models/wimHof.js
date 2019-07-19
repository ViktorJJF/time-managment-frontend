const mongoose = require('mongoose');
let Schema = mongoose.Schema;
let validStates = {
    values: ['POR HACER', 'HACIENDO', 'HECHO', 'OLVIDADO'],
    message: '{VALUE} no es un estado válido'
};
let wimHofSchema = new Schema({
    title: {
        type: String,
        default: "¿Cómo llamarías a lo que hiciste hoy?",
        required: [true, "El título es obligatorio"]
    },
    date: {
        type: Number,
    },
    state: {
        type: String,
        default: 'POR HACER',
        enum: validStates
    },
    totalTime: [{}],
    laps: [{}],
    notes: String
});

module.exports = mongoose.model('wimHof', wimHofSchema);