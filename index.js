'use strict'

const express = require('express')
const app = express()

app.use(express.json());

require('dotenv').config()
const PORT = process.env.PORT
const HOST = process.env.HOST

require('./src/dbConnection')

app.all('/', (req, res) => {
    res.send('wellcome to my blog api')
})

app.use(require('./src/errorHandler'))

app.listen(PORT, () => console.log(`Server is running on -> http://${HOST}:${PORT}`))