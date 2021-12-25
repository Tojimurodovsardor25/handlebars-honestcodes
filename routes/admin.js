const { Router } = require('express')
const router = Router()
const auth = require('../middleware/auth')
const Admin = require('../models/Admin')

router.get('/', auth, async function (req, res, next) {
    const admin = await Admin.find()

    res.render('admin/index', {
        layout: 'main',
        admin
    })
})

module.exports = router