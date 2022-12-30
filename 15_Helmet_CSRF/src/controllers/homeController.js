exports.paginaIniciAL = (req, res) => {
    res.render('index', {
        titulo: 'Esse título está sendo enviado do views',
        numeros: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    })
}

exports.envioInput = (req, res) => {
    res.send(req.body)
}