'use strict'

const express = require('express')
const app = express()

require('dotenv').config()
const PORT = process.env.PORT
const HOST = process.env.HOST

app.listen(PORT, () => console.log(`Server is running on -> ${HOST}:${PORT}`))