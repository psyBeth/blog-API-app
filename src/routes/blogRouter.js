'use strict'

const router = require('express').Router()

const {route} = require('express/lib/router')
const {blogPost} = require('../controllers/blogController')

router.route('/posts')
    .get(blogPost.list)
    .post(blogPost.create)

router.route('/posts/:postId')
    .get(blogPost.read)
    .put(blogPost.update)  
    .patch(blogPost.update) //put and patch is the same
    .delete(blogPost.delete)


module.exports = router;