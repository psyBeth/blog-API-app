'use strict'

const router = require("express").Router()

const User = require("../controllers/userController")

// User:
router.route('/users')
    .get(User.list)
    .post(User.create)
router.route('/users/:userId')
    .get(User.read)
    .put(User.update) 
    .patch(User.update)
    .delete(User.delete)

module.exports = router