const passportConfig = require('../config/passport')

function isLogged(req, res, next) {
  const auth = this.passportConfig.isAuthenticated()
  if (req.auth) {
    next()
  } else {
    res.redirect('/')
  }
}

module.exports = {
  isLogged,
}
