exports.paginaIniciAL = (req, res) => {
    res.render('index')
}

exports.envioInput = (req, res) => {
    res.send(`O que voce me enviou foi: ${req.body.nome}`)
}