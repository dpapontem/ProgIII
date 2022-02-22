const express = require('express')
const clientSchema = require('../models/client_model')
const route = express.Router()

/*crear una ruta para creacion de usuario*/

route.post('/client', (req, res) => {

    const user = clientSchema(req.body)
    user
        .save()
        .then(data => res.json(data))
        .catch((error) => res.json({ message: error }))
})

/*Lista de los usuarios existentes */

route.get('/clients', (req, res) => {
    clientSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

/* Mostrar info de usuario especifico */
route.get('/clients/:id', (req, res) => {
    const { id } = req.params

    clientSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))

})

/* Eliminar un usuario especifico */

route.delete('/clients/:id', (req, res) => {
    const { id } = req.params

    clientSchema
        .remove({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

/* Editar un recurso */


route.put('/clients/:id', (req, res) => {
    const { id } = req.params
    const {
        name,
        lastname,
        address: {
            city,
            street,
            lat,
            length

        },
        acount_bank
    } = req.body
    clientSchema
        .updateOne({ _id: id }, {
            $set: {
                name,
                lastname,
                address: {
                    city,
                    street,
                    lat,
                    length
                },
                acount_bank
            }
        })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

module.exports = route