module.exports = (req, res, next) => {
    if (!req.session.isAuth) {
        console.log('qayta jo`natish');
        res.redirect('/auth/signin')
    }

    next()
}