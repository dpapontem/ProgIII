const mongoose = require('mongoose')
const product_schema = mongoose.Schema({
    prodcut: {
        type: String,
        require: true

    },
    img: {
        type: String,
        require: true

    },
    price: {
        type: Number,
        require: true

    },
    cant: {
        type: Number,
        require: true
    },
    state: {
        type: Boolean,
        require: true
    }
})

module.exports = mongoose.model('product_document', product_schema)