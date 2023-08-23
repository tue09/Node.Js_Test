const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 8082
const hostname = process.env.HOST_NAME
const configViewEngine = require('./config/viewengine')
const webRoutes = require('./routes/web')

configViewEngine(app);

app.use('/', webRoutes)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})