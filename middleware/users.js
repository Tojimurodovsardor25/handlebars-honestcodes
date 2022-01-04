module.exports = (req, res, next) => {
    if(!req.session.userAuth){
        console.log('qayta jo`natish')
        res.redirect("/user/signin")
    }
}