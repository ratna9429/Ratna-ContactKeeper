const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator')
const auth = require('../middleware/auth')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')

const User = require('../models/User')

// @route GET api/users
// @desc Get logged in user
// @desc Private

router.get('/', auth , async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password')
  res.json(user)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

// @route POST api/users
// @desc Auth User and get token
// @desc Public

router.post(
  '/',
  [
    check('email', 'Please enter your login email').isEmail(),
    check('password', 'Please enter your login password').exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const { email, password } = req.body



    try {
      const user = await User.findOne({ email })
      if (!user) {
        return res.status(400).json({ msg: 'Please enter valid credentials' })
      }

      const isMatch = await bcrypt.compare(password, user.password)
      if (!isMatch) {
        return res.status(400).json({ msg: 'Please enter valid credentials' }) }

        const payload = {
          user: {
            id: user.id,
          },
        }

        jwt.sign(
          payload,
          config.get('jwtSecret'),
          {
            expiresIn: 360000,
          },
          (err, token) => {
            if (err) throw err
            res.json({ token })
          }
        )
    } catch (err) {
      console.error(err.message)
      res.status(500).send('Server Error')
    }
  }
)

module.exports = router
