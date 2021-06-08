const express = require('express')
const router = express.Router()

// @route GET api/contacts
// @desc Get all users contacts
// @desc Private

router.get('/' , (req , res) => {
  res.send('get all contacts')
})

// @route POST api/contacts
// @desc Add new contact
// @desc Private

router.post('/' , (req , res) => {
  res.send('add contact')
})

// @route PUT api/contacts/:id
// @desc update contact
// @desc Private

router.put('/:id' , (req , res) => {
  res.send('update contact')
})

// @route Delete api/contacts/:id
// @desc delete contact
// @desc Private

router.put('/:id' , (req , res) => {
  res.send('delete contact')
})

module.exports = router