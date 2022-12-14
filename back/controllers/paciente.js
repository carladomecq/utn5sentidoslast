const Paciente = require('../models/paciente');

class PacienteControllers {

    async findAll(){
        try {
            return await Paciente.find().lean();
        } catch (error) {
            throw error;
        }

    }

    async create(paciente){
        try {
            return await Paciente.create(paciente)
        } catch (error) {
            throw error;
        }
    }

    async delete(id){
        try {
            await Paciente.findByIdAndDelete(id)
        } catch (error) {
            throw error;
        }
    }


}

module.exports = new PacienteControllers;

