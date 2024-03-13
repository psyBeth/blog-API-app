'use strict'

require("express-async-errors")

const User = require("../models/userModel")
const passwordEncrypt = require('../helpers/passwordEncrypt')

module.exports = {

    list: async (req, res) => {
        const data = await User.find()
        res.status(200).send({
            error: false,
            data: data
        })
    },
    create: async (req, res) => {
        const data = await User.create(req.body)
        res.status(201).send({
            error: false,
            body: req.body,
            data: data
        })
    },
    read: async (req, res) => {
        const data = await User.find({ _id: req.params.userId })
        res.status(202).send({
            error: false,
            data: data
        })
    },
    update: async (req, res) => {
        const data = await User.updateOne({ _id: req.params.userId }, req.body)
        const newdata = await User.findOne({ _id: req.params.userId })
        res.status(202).send({
            error: false,
            body: req.body,
            data: data,
            newdata: newdata
        })
    },
    delete: async (req, res) => {
        const data = await User.deleteOne({ _id: req.params.userId })
        // console.log(data);
        res.sendStatus((data.deletedCount >= 1) ? 204 : 404)
    },

    //? Login / Logout:
    login: async (req, res) => {
        const { email, password } = req.body
        if(email && password){

            const user = await User.findOne({ email: email })
            if(user && user.password == passwordEncrypt(password)) {
                res.status(200).send({
                    error: false,
                    message: 'login ok',
                    user
                })
            } else{
            res.errorStatusCode = 401
            throw new Error('Login parameters are not true.')
            }

        } else {
            res.errorStatusCode = 401
            throw new Error('Email and password are required.')
        }
    },
    logout: async (req, res) => {

    },
}