const express = require('express')

const router = express.Router()
const passportConfig = require('../config/passport')

router.get('/', passportConfig.isAuthenticated, (req, res) => {
  res.render('index')
})

router.get('/test', (req, res) => {
  res.render('blank-page')
})


module.exports = router

