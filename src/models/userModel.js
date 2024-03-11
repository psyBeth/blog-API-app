'use strict'

const mongoose = require('mongoose')

// SCHEMA
const UserSchema = new mongoose.Schema({

    email: {
        type: String,
        trim: true,
        required: [true, 'E-mail is required.'],
        // validate: (email) => {return true},
        // validate: [
        //     (email) => {
        //         if (email.includes('@') && email.includes('.')) {
        //             return true
        //         }
        //         return false
        //     },
        //     'Invalid e-mail type.'
        // ],
        validate: [
            (email) => (email.includes('@') && email.includes('.')),
            'Invalid e-mail type.'
        ],
        // unique: true,
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