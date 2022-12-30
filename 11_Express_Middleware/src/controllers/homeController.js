exports.paginaIniciAL = (req, res) => {
    res.render('index')
}

exports.envioInput = (req, res) => {
    res.send(req.body)
}