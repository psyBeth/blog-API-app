'use strict'

const mongoose = require('mongoose')

const blogPostSchema = new mongoose.Schema(
    {
        //_id
        // categoryId:
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
