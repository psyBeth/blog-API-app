"use strict"

const { blogCategory, blogPost } = require('./models/blogModel')

module.exports = async () => {

    /* BlogCategory */

    // Get first blogCategory:
    const BlogCategory = await blogCategory.findOne()
    // console.log(blogCategory._id)

    if (blogCategory) {
        blogPost.updateMany({ //? Filter:
            "blogCategoryId": { $exists: false } // if there's no field
        }, { //? Update:
            "blogCategoryId": blogCategory._id // declare one
        }).catch(err => console.log(err))
    }

    // End:
    console.log('* Synchronized *')
    /* Finished */
}