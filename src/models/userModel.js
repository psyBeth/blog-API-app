'use strict'

const mongoose = require('mongoose')

// PASWORD ENCRYPTION
// https://nodejs.org/api/cryptohtml#cryptopbkdf2syncpassword-salt-iterations-keylen-digest
const crypto = require('node:crypto')

const keyCode = process.env?.SECRET_KEY || 'write_random_chars_in_here'
const loopCount = 10_000   //encyript it 10000 times
const charCount = 32   // always the half of desired char - 32 for 64
const encType = 'sha512'

const passwordEncrypt = function (password) {
    return crypto.pbkdf2Sync(password, keyCode, loopCount, charCount, encType).toString('hex')
   
}

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
        // set: () => { return 'nininini'}
        // set: (password) => { return password + 123}
        // set: function (password) => { return password + 123}
        set: (password) => passwordEncrypt(password)

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