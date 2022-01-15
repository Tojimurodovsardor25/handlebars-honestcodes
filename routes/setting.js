const { Router } = require('express')
const router = Router()
const user = require('../middleware/user')
const Users = require('../models/Users')

router.get('/settings', user, async (req, res) => {
    const users = await Users.find()
    res.render('userSettings/settings', {
        title: 'Settings profil',
        layout: 'index',
        users
    })
    console.log(users, 'foydalanuvchi malumoti');
})

module.exports = router