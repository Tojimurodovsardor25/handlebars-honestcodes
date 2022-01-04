const { Router } = require('express')
const router = Router()
// const User = require('../models/Users')
// const fileUpload = require('../middleware/fileUpload.js')
// const bcryptjs = require('bcryptjs')

router.get('/signin', (req, res) => {
  res.render('users/signin', {
    title: 'Sign in',
  })
})
router.get('/signup', (req, res) => {
  res.render('users/signup', {
    title: 'Sign up',
  })
})

module.exports = router;