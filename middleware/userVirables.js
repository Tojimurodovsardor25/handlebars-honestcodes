module.exports = (req, res, next) => {
    res.locals.userAuthen = req.session.userAuth
    console.log(req.session.userAuth, 'User virables');
    
    next()
}