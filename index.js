'use strict'

const express = require('express')
const app = express()

app.use(express.json());

require('dotenv').config()
const PORT = process.env.PORT
const HOST = process.env.HOST

require('./src/configs/dbConnection')

app.all('/', (req, res) => {
    res.send('wellcome to my blog api')
})

app.use('/blog', require('./src/routes/blogRouter'))

app.use(require('./src/middlewares/errorHandler'))

app.listen(PORT, () => console.log(`Server is running on -> http://${HOST}:${PORT}`))

// require('./src/sync')()