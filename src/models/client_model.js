const mongoose = require('mongoose')
const client_schema = mongoose.Schema({
    name: {
        type: String,
        require: true

    },
    lastname: {
        type: String,
        require: true

    },

    address: {
        city: {
            type: String,
            require: true
        },
        code_zip: {
            type: String,
            require: true
        },
        lat: {
            type: Number,
            require: true
        },
        length: {
            type: Number,
            require: true
        }

    },
    acount_bank: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('client_document', client_schema)