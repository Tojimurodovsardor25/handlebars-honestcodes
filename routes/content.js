const { Router } = require('express')
// const Content = require('../models/Content')
const router = Router()


router.get('/view', (req, res) => {
    res.render('admin/contents', {
        title: 'Admin bo`limi',
        layout: 'main',
    })
})

module.exports = router