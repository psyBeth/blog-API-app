'use strict'

const express = require('express')
const app = express()

app.use(express.json());

require('dotenv').config()
const PORT = process.env.PORT
const HOST = process.env.HOST

require('./src/configs/dbConnection')

/* ------------------------------------------------------- */
// SessionCookies:
// http://expressjs.com/en/resources/middleware/cookie-session.html
// https://www.npmjs.com/package/cookie-session
//* $ npm i cookie-session

const session = require('cookie-session');
app.use(session({
    secret: process.env.SECRET_KEY,
    // maxAge: 1000 * 60 * 60 * 24 * 3 //millisecond    // will be saved for 3 days
}));
/* ------------------------------------------------------- */

app.use(require('./src/middlewares/userControl'))

/* ------------------------------------------------------- */

app.all('/', (req, res) => {
    if (condition) {
        res.send({
            error: false,
            message: 'WELLCOME BLOG API PROJECT',
            session: req.session,
            user: req.user
        })
    } else {
        res.send({
            error: false,
            message: 'WELLCOME BLOG API PROJECT',
            session: req.session,
        })
    }

});

/* ------------------------------------------------------- */

app.all('/', (req, res) => {
    res.send('wellcome to my blog api')
})

app.use('/blog', require('./src/routes/blogRouter'))
app.use('/user', require('./src/routes/userRouter'))

app.use(require('./src/middlewares/errorHandler'))

app.listen(PORT, () => console.log(`Server is running on -> http://${HOST}:${PORT}`))

// require('./src/sync')()