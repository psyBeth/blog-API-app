'use strict'

const mongoose = require('mongoose')

// SCHEMA
const UserSchema = new mongoose.Schema({

    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        trim: true,
        required: true,

    },

    firstName: String,
    lastName: String,
}, {
    collection: 'user',
    timestamps: true
})

// module.exports = {
//     User: mongoose.model('User', UserSchema)
// }

module.exports = mongoose.model('User', UserSchema)