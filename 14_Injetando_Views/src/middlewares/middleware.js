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