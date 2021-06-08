const express = require('express')
const router = express.Router()

// @route GET api/users
// @desc Get logged in user
// @desc Private

router.get('/' , (req , res) => {
  res.send('get logged in user')
})

// @route POST api/users
// @desc Auth User and get token
// @desc Public 

router.post('/' , (req , res) => {
  res.send('login user')
})


module.exports = router