const Contato = require('../models/ContatoModel')

exports.index = async (req, res) => {
    const contato = new Contato(req.body)
    const contatos = await contato.buscarContatos()
    res.render('index', { contatos })
}