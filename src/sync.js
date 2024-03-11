"use strict"

const { BlogCategory, BlogPost } = require('./models/blog.model')

module.exports = async () => {

    /* BlogCategory */

    // Get first blogCategory:
    const blogCategory = await BlogCategory.findOne()
    // console.log(blogCategory._id)

    if (blogCategory) {
        BlogPost.updateMany({ //? Filter:
            "blogCategoryId": { $exists: false } // if there's no field
        }, { //? Update:
            "blogCategoryId": blogCategory._id // declare one
        }).catch(err => console.log(err))
    }

    // End:
    console.log('* Synchronized *')
    /* Finished */
}