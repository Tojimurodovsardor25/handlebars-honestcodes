const { Router } = require('express')
const router = Router()
const Users = require('../models/Users')
const bcrypt = require('bcryptjs')

router.get('/signup', (req, res) => {
    res.render('user/signup', {
        title: 'User sign in'
    })
})

module.exports = router