exports.middlewareGlobal = (req, res, next) => {
    res.locals.umVariavelLocal = 'Este é o valor da variável local'
    next()
}

exports.outroMidleware = (req, res, next) => {
    console.log()
    console.log('Sou seu outro middleware.')
    console.log()
    next()
}

exports.checkCsrfError = (err, req, res, next) => {
    if(err && 'EBADCSRFTOKEN' === err.code) {
        return res.render('404')
    }
}

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken()
    next()
}