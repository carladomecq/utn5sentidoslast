const mongoose = require('mongoose');
require('dotenv').config();
const URL = process.env.MONGO;

const conexion = mongoose.connect(URL, {
            UseNewUrlParser: true,
            useUnifiedTopology: true,
        });
       
mongoose.connection.on('connected', () =>{
   console.log('Conexion Correcta a MONGO ATLAS');
})   

mongoose.connection.on('error', ()=> {
    console.log('Error en mi Conexion');
})


module.exports = conexion;
