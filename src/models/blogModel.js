'use strict'
//BLOG API MODELS 

const mongoose = require('mongoose')

// BLOG CATEGORY
const blogCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    }
}, {
        collection: 'blogCategory',
        timestamps: true
})

// BLOG POST
const blogPostSchema = new mongoose.Schema(
    {
        //_id
        blogCategoryId: {
            type: mongoose.Schema.Types.ObjectId,   //ForeignKey, RelationalID
            ref: 'blogCategory',
            required: true
        },
        title: {
            type: String,
            trim: true,
            required: true,
        },
        content: {
            type: String,
            trim: true,
            required: true,
        },
        published: {
            type: Boolean,
            default: true
        }
        // createdAt,
        // updatedAt
    },
    {
        collection: 'blogPost',
        timestamps: true,
    }
)
// mongoose.model('model name', 'which schema')
// const blogPostModel = mongoose.model('blogPost', blogPostSchema)
// module.exports = {
//     blogPost: blogPostModel,
// }
module.exports = {
    blogCategory: mongoose.model('blogCategory', blogCategorySchema),
    blogPost: mongoose.model('blogPost', blogPostSchema)
}



// const nameSchema = new mongoose.Schema({fields}, {table name})
/*
const nameSchema = new mongoose.Schema(
    {
        // _id: //auto created and increment  
        // fieldName: Type,
        // fieldName2: String,
        // fieldName3: BigInt,
        fieldName: {
            type: String,
            default: null,
            trim: true,
            unique: false,
            select: true, //model comes when it's called
            index: false, //if true, makes it faster to reach with search engine
            required: [true, 'error message'], //data required to enter
            enum: [[1, 2, 3], 'error message'],  //only 1, 2 and 3 can be used //? certain pattern with data 
            validate: [function(data){return true}], //slice the data with a function
            get: function(data){return true} , //when the data is called
            set: function(data){return true} , //when the data is saved
        }
    },
    {
        collection: 'collectionName', // table name
        timestamps: true, // createDate, updateDate
    }
)
*/
