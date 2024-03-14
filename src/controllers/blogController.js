'use strict'

require('express-async-errors')

const {blogPost, blogCategory} = require('../models/blogModel')

// module.exports={
//     'key': 'value',
// }

module.exports.blogCategory = {
    list: async(req, res) => {
        const data = await blogCategory.find()
        res.status(200).send({
            error: false,
            data: data,
        })
    },
    create: async(req, res) => {
        const data = await blogCategory.create(req.body)
        res.status(201).send({
            error: false,
            body: req.body,
            data: data,
        })
    },
    read: async(req, res) => {
        const data = await blogCategory.find({_id: req.params.categoryId})
        res.status(202).send({
            error: false,
            data: data,
        })
    },
    update: async(req, res) => {
        const data = await blogCategory.updateOne({_id: req.params.categoryId}, req.body)
        const newdata = await blogCategory.updateOne({_id: req.params.categoryId}, req.body)
        res.status(203).send({
            error: false,
            body: req.body,
            data: data, //info about update
            //? to get the updated data, call it again
            newdata: newdata,

        })
    },
    delete: async(req,res)=>{
        const data=await blogCategory.deleteOne({_id:req.params.categoryId})
        // console.log(data);
        res.sendStatus((data.deletedCount>=1)? 204:404)
        
    }
}

module.exports.blogPost = {

    list: async (req, res) => {

        //? FILTERING & SEARCHING & SORTING & PAGINATION */

        //* FILTERING:
        // URL?filter[key1]=value1&filter[key2]=value2
        const filter = req.query?.filter || {}
        // console.log(filter);

        //*SEARCHING:
        // URL?search[key1]=value1&search[key2]=value2
        // https://www.mongodb.com/docs/manual/reference/operator/query/regex/
        const search = req.query?.search || {}
        // console.log(search);
        // { title: 'test', content: 'test' } -> { title: { $regex: 'test' }, content: { $regex: 'test' } }
        for (let key in search) {
            search[key] = { $regex: search[key], $options: 'i' }  //insensitive
        }

        //* SORTING:
        // URL?sort[key1]=asc&sort[key2]=desc
        // asc: A-Z - desc: Z-A
        const sort = req.query?.sort || {}
        // console.log(sort);

        //* PAGINATION:
        // URL?page=3&limit=10
        // LIMIT
        let limit = Number(req.query?.limit);
        limit = limit > 0 ? limit : Number(process.env.PAGE_SIZE)
        // console.log(typeof limit, limit);
        // PAGE
        let page = Number(req.query?.page);
        page = page > 0 ? page : 1
        console.log(page);
       

        //? FILTERING & SEARCHING & SORTING & PAGINATION */

        // const data = await blogPost.find({ published: true })
        // const data = await blogPost.find(filter)
        const data = await blogPost.find({...filter, ...search}).sort(sort).limit(limit)

        res.status(200).send({
            error: false,
            data: data
        })

    },
    create: async (req, res) => {
        const data = await blogPost.create(req.body)
        res.status(201).send({
            error: false,
            body: req.body,
            data: data
        })
    },
    read: async (req, res) => {
        const data = await blogPost.find({ _id: req.params.postId })
        res.status(202).send({
            error: false,
            data: data

        })
    },
    update: async (req, res) => {
        const data = await blogPost.updateOne({ _id: req.params.postId }, req.body)
        const newdata = await blogPost.find({ _id: req.params.postId })
        res.status(202).send({
            error: false,
            body: req.body,
            data: data, // info about update
            newdata: newdata
        })
    },
    delete: async (req, res) => {
        const data = await blogPost.deleteOne({ _id: req.params.postId })
        // console.log(data);
        res.sendStatus((data.deletedCount >= 1) ? 204 : 404)
    }
}