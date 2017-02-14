const express = require('express')

const app = express()

const home = require('./routers/home.js')

app.use('/home', home)

app.listen(9000, () => console.log('App is listening at http://localhost:8080...'))
