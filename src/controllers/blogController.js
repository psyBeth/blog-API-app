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

}