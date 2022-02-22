// Instalacion del framework express para manejar los request HHTP y establecer el puerto a usar
const express = require('express')
    // La libreria mongoose permite la conexion con la BD MongoDB
const mongoose = require('mongoose')
    // process.env es una variable global para representar el estado de las variable de ambiente

const port = 3000
const execute_app = express()
require('dotenv').config()

// Conexion al puesrto 3000
execute_app.listen(port, () => { console.log('Listening the port', port) })


// Primer request para acceder a http://localhost:3000
execute_app.get('/', (req, res) => {
    res.send('Programación III')
})

//Coneccion a la base de datos mongoBD
mongoose
    .connect(process.env.MONGODB_CONNECTION_STRING)
    .then(() => console.log('Conect whit mongodb'))
    .catch((error) => console.error(error))



const userSchemRoutes = require('./routes/client_routes')
const userSchemRoutesUno = require('./routes/product_routes')
    /* Middleware */
execute_app.use(express.json())

/* Crear usuario: http://localhost:3000/dashboard/user
consultar usuario:  http://localhost:3000/dashboard/users
 */
execute_app.use('/dashboard', userSchemRoutes)
execute_app.use('/dashboard', userSchemRoutesUno)