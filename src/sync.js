"use strict"

const User = require('./models/userModel')
const { blogCategory, blogPost } = require('./models/blogModel')

module.exports = async () => {

    /* BlogCategory */

    // Get first blogCategory:
    // const BlogCategory = await blogCategory.findOne()
    // // console.log(blogCategory._id)

    // if (blogCategory) {
    //     blogPost.updateMany({ //? Filter:
    //         "blogCategoryId": { $exists: false } // if there's no field
    //     }, { //? Update:
    //         "blogCategoryId": blogCategory._id // declare one
    //     }).catch(err => console.log(err))
    // }

    //* Exampla Data */
    // Deleted All Records:
    await User.deleteMany().then(() => console.log(' - User Deleted All'))
    await blogCategory.deleteMany().then(() => console.log(' - BlogCategory Deleted All'))
    await blogPost.deleteMany().then(() => console.log(' - BlogPost Deleted All'))

    // Example User:
    const user = await User.create({
        email: "test@test.com",
        password: "12345678",
        firstName: "Test",
        lastName: "Test"
    })
    // Example Category:
    const BlogCategory = await blogCategory.create({
        name: 'Test Category'
    })
    // Example Posts:
    for (let key in [...Array(200)]) {
        await blogPost.create({
            userId: user._id,
            blogCategoryId: BlogCategory._id,
            title: `test ${key} title`,
            content: `test ${key} content`,
            published: Boolean(key%2)
        })
    }

    // End:
    console.log('* Synchronized *')
    /* Finished */
}