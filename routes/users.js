const { Router } = require('express')
const router = Router()
const user = require('../middleware/user')
// const Users = require('../models/Users')

router.get('/', user, async (req, res) => {
  // const users = await Users.find()
  console.log(req.session.users);
  const userOB = req.session.users
  res.render('users/index', {
    title: 'User page index',
    layout: 'index',
    userOB
  })
})

module.exports = router