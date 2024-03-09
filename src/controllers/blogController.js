'use strict'

require('express-async-errors')

const {blogPost} = require('../models/blogModel')

// module.exports={
//     'key': 'value',
// }

module.exports.blogPost = {
    list: async(req, res) => {
        const data = await blogPost.find()
        res.status(200).send({
            error: false,
            data: data,
        })
    },
    create: async(req, res) => {
        const data = await blogPost.create(req.body)
        res.status(201).send({
            error: false,
            body: req.body,
            data: data,
        })
    },
    read: async(req, res) => {
        const data = await blogPost.find()
        res.status(200).send({
            error: false,
            data: data,
        })
    },
    update: async(req, res) => {
        const data = await blogPost.find()
        res.status(200).send({
            error: false,
            data: data,
        })
    },
    delete: async(req, res) => {
        const data = await blogPost.find()
        res.status(200).send({
            error: false,
            data: data,
        })
    },

}