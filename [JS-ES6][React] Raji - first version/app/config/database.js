/* eslint-env node */
'use strict'

let dbUrl = process.env.MONGOLAB_URI || 'mongodb://localhost/test'

module.exports = { url: dbUrl }
