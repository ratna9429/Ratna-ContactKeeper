const jwt = require('jsonwebtoken')
const config = require('config')

const auth = (req, res, next) => {
  // Get Token from Header
  const token = req.header('x-auth-token')

  // Check if No Token
  if (!token) {
    res.status(401).json({ msg: 'No Token , Authorization Denied' })
  }

  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'))
    req.user = decoded.user
    next()
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid.' })
  }
}

module.exports = auth
