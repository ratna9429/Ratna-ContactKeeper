const express = require('express')
const router = express.Router()

// @route POST api/users
// @desc Register a user
// @desc Public

router.post('/' , (req , res) => {
  res.send('register a user')
})

module.exports = router