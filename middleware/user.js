module.exports = (req, res, next) => {
    if (!req.session.userAuth) {
        console.log('User qayta jo`natish')
        res.redirect("/user/signin")
    }
    next()
}