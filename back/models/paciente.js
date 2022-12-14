const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const pacienteSchema = new Schema({
    nombre: {
        type: 'string',
        required: true
    },
    apellido: {
        type: 'string',
        required: true
    },
       email:{
        type: 'string',
        required: true
    },
    telefono:{
        type: 'string',
        required: true
    },
    consulta: {
        type: 'string',
        required: true 
    },
    timestamp: {
        type: 'Date',
        default: new Date()
    }
});

const Paciente = mongoose.model('paciente', pacienteSchema);

module.exports = Paciente;

    