const express = require('express')
const productSchema = require('../models/product_model')
const route = express.Router()

/*crear una ruta para creacion de usuario*/

route.post('/product', (req, res) => {

    const user = productSchema(req.body)
    user
        .save()
        .then(data => res.json(data))
        .catch((error) => res.json({ message: error }))
})

/*Lista de los usuarios existentes */

route.get('/products', (req, res) => {
    productSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

/* Mostarar info de usuario especifico */
route.get('/products/:id', (req, res) => {
    const { id } = req.params

    productSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))

})

/* Eliminar un usuario especifico */

route.delete('/products/:id', (req, res) => {
    const { id } = req.params

    productSchema
        .remove({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

/* Editar un recurso */

route.put('/products/:id', (req, res) => {
    const { id } = req.params
    const { prodcut, url, price, cant, state } = req.body
    productSchema
        .updateOne({ _id: id }, { $set: { prodcut, url, price, cant, state } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
})

module.exports = route