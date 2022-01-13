const { Router } = require('express')
const router = Router()
const Users = require('../models/Users')
const bcrypt = require('bcryptjs')
const fileUpload = require('../middleware/fileUpload.js')

router.get('/signin', (req, res, next) => {
    res.render('user/signin', {
        title: 'User sign in'
    })
})

router.get('/signout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/user/signin')
    })
})

router.post('/signin', async (req, res) => {
    try {
        const { nickname, password } = req.body


        const candidateUser = await Users.findOne({ nickname })
        console.log(candidateUser);
        if (candidateUser) {
            const areSame = await bcrypt.compare(password, candidateUser.password) //true || false
            if (areSame) {
                req.session.userAuth = true
                req.session.users = candidateUser
                res.redirect('/users')
            } else {
                res.redirect('/user/signin')
            }
        } else {
            res.redirect('/user/signin')
        }
    } catch (error) {
        console.log(error);
    }
});

router.get('/signup', (req, res) => {
    res.render('user/signup', {
        title: 'User sign up'
    })
})

router.post('/signup', async (req, res) => {
    const { nickname, name, password } = req.body
    console.log(req.body, 'sign up malumotlari');
    const userHasPassword = await bcrypt.hash(password, 10)

    const users = new Users({
        nickname,
        name,
        password: userHasPassword,
    })

    await users.save()
    res.redirect('/user/signin')
})


module.exports = router