const { Router } = require('express')
const router = Router()
const user = require('../middleware/user')
const Users = require('../models/Users')

router.get('/', user, async (req, res) => {
  const users = await Users.find()
  res.render('users/index', {
    title: 'User page index',
    layout: 'index',
    users,
  })
  console.log(users, 'foydalanuvchi malumoti');
})

module.exports = router