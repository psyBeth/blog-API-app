'use strict'

module.exports = (req, res, next) => {
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
    // console.log('limit', limit);
    // PAGE
    let page = Number(req.query?.page);
    // page = page > 0 ? page : 1
    page = page > 0 ? (page - 1) : 1
    // page num is always page -1 in backend
    // console.log('page', page);

    // SKIP: 
    let skip = Number(req.query?.skip);
    skip = skip > 0 ? skip : (page * limit)
    // console.log('skip', skip);

    //? FILTERING & SEARCHING & SORTING & PAGINATION */

    // const data = await blogPost.find({...filter, ...search}).sort(sort).skip(10).limit(limit);

    res.getModelList = async function (Model, populate = null) {
        return data = await Model.find({ ...filter, ...search }).sort(sort).skip(10).limit(limit).populate('blogCategoryId');
    }
    // Details:
    res.getModelListDetails = async (Model) => {

        const data = await Model.find({ ...filter, ...search })

        let details = {
            filter,
            search,
            sort,
            skip,
            limit,
            page,
            pages: {
                previous: (page > 0 ? page : false),
                current: page + 1,
                next: page + 2,
                total: Math.ceil(data.length / limit)
            },
            totalRecords: data.length,
        }
        details.pages.next = (details.pages.next > details.pages.total ? false : details.pages.next)
        if (details.totalRecords <= limit) details.pages = false
        return details
    }

    next();
}