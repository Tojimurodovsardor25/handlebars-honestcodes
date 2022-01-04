// const { Router } = require('express')
// const Content = require('../models/Content')
// const router = Router()


// router.get('/add', (req, res) => {
//     res.render('admin/contentCreate', {
//         title: 'Admin bo`limi',
//         layout: 'main',
//     })
// })

// router.post('/add', async (req, res) => {
//     const { contentName, contentContext, img } = req.body
//     console.log(req.body);
//     const content = new Content({
//         contentName,
//         contentContext,
//         img
//     })

//     await content.save()
//     res.redirect('/')
// })

// module.exports = router