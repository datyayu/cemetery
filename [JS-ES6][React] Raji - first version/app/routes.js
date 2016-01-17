/* eslint-env node */
'use strict'
const path    = require('path')
const express = require('express')
const router  = express.Router()

const publicFolder = path.join(__dirname, 'public')

router.use('/public', express.static(publicFolder))
router.get('/', function (req, res) { res.redirect('/player') })
router.get('/player', function (req, res) { res.render('player.jade') })



module.exports = router
