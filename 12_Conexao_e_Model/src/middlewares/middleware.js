exports.middlewareGlobal = (req, res, next) => {
    if(req.body.cliente){
        console.log()
        console.log(`Vi que você postou ${req.body.cliente}`)
        console.log()
    }
    next()
}

exports.outroMidleware = (req, res, next) => {
    console.log()
    console.log('Sou seu outro middleware.')
    console.log()
    next()
}