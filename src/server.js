const express = require('express')
const app = express()
const port = 8081
const configViewEngine = require('./config/viewengine')
const webRoutes = require('./routes/web')

configViewEngine(app);

app.use('/', webRoutes)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})