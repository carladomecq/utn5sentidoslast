const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
require('./database/conexion')

const PORT = process.env.PORT || 9000;

const app = express();
const PacienteControllers = require('./controllers/paciente');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors()); 

app.get('/', async (req, res) => {
     res.json({
        paciente: await PacienteControllers.findAll(),
        
    }); 
});


app.post('/crear', async (req, res) => {
    console.log(req.body);
        await PacienteControllers.create(req.body);
    res.json('Comentario Creado')
});


app.delete('/:id', async (req, res) => {
    console.log(req.params.id);
    const id = req.params.id;
    await PacienteControllers.delete(id);
    res.json('Usuario Eliminado')
});

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el Puerto: ${PORT}`);
});