'use strict'

const router = require('express').Router()

const {route} = require('express/lib/router')
const {blogPost, blogCategory} = require('../controllers/blogController')

//blogCategory:
router.route('/posts')
    .get(blogCategory.list)
    .post(blogCategory.create)

router.route('/posts/:postId')
    .get(blogCategory.read)
    .put(blogCategory.update)  
    .patch(blogCategory.update)
    .delete(blogCategory.delete)

//blogPost:
router.route('/posts')
    .get(blogPost.list)
    .post(blogPost.create)

router.route('/posts/:postId')
    .get(blogPost.read)
    .put(blogPost.update)  
    .patch(blogPost.update) //put and patch is the same
    .delete(blogPost.delete)


module.exports = router;