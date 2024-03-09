'use strict'

const router = require('express').Router()

const {route} = require('express/lib/router')
const {blogPost} = require('../controllers/blogController')

router.route('/posts').get(blogPost.list)

module.exports = router;