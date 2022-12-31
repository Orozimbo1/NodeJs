exports.middlewareGlobal = (req, res, next) => {
    res.locals.errors = req.flash('errors')
    res.locals.success = req.flash('success')
    res.locals.user = req.session.user
    next()
}

exports.outroMidleware = (req, res, next) => {
    console.log()
    console.log('Sou seu outro middleware.')
    console.log()
    next()
}

exports.checkCsrfError = (err, req, res, next) => {
    if(err) {
        return res.render('404')
    }
}

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken()
    next()
}