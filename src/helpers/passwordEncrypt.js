'use strict'
// PASWORD ENCRYPTION
// https://nodejs.org/api/cryptohtml#cryptopbkdf2syncpassword-salt-iterations-keylen-digest
const crypto = require('node:crypto')

const keyCode = process.env?.SECRET_KEY || 'write_random_chars_in_here'
const loopCount = 10_000   //encyript it 10000 times
const charCount = 32   // always the half of desired char - 32 for 64
const encType = 'sha512'

module.exports = function (password) {
    return crypto.pbkdf2Sync(password, keyCode, loopCount, charCount, encType).toString('hex')
   
}