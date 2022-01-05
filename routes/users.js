const { Router } = require('express')
const router = Router()
const users = require('../middleware/user')
const Users = require('../models/Users')

router.get('/', users, async (req, res) => {
  const user = await Users.find()
  res.render('user/index', {
    title: 'User page index'
  })
})

module.exports = router