/* eslint-env node */
'use strict'
const express  = require('express')
// const mongoose = require('mongoose')
const app      = express()
const port     = process.env.PORT || 9000

// Server middleware.
const morgan     = require('morgan')
const bodyParser = require('body-parser')

// Custom modules.
const routes = require('./routes.js')

// Configs.
// const databaseConfig = require('./config/database.js')


// Database connection.
// mongoose.connect(databaseConfig.url)

// Set up server middleware.
app.use(morgan('dev'))
app.use(bodyParser.json())

// Render engine.
app.set('views', `${__dirname}/views`)
app.set('view engine', 'jade')

// Routes.
app.use(routes)


// Start listening.
app.listen(port, function () {
  console.log(`listening on port ${port}`)
})
