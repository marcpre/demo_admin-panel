const express = require('express')

const router = express.Router()
const utils = require('../util/utils')

router.get('/', utils.isLogged(), (req, res) => {
  res.render('dashboard')
})

module.exports = router
