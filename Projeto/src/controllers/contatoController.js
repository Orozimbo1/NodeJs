const { render } = require('ejs')
const Contato = require('../models/ContatoModel')

exports.index = (req, res) => {
    return res.render('contato', {
        contatoExists: {}
    })
}

exports.register = async (req, res) => {
    try {
        const contato = new Contato(req.body)
        await contato.register()

        if(contato.errors.length > 0) {
            req.flash('errors', contato.errors)
            req.session.save(function() {
                return res.redirect('/contato/index') 
            })
            return
        }

        req.flash('success', 'Seu contato foi registrado com sucesso.')
        req.session.save(function() {
            return res.redirect(`/contato/index/${contato.contato._id}`)
        })

    } catch(e) {

        console.log(e)
        return res.render('404')
    }
}

exports.editIndex = async (req, res) => {
    if(!req.params.id) return res.render('404')

    const contato = new Contato(req.body)
    const contatoExists = await contato.buscarContatoId(req.params.id)
    if(!contatoExists) return res.render('404')

    res.render('contato', { contatoExists })
}

exports.edit = async (req, res) => {
    try {
        if(!req.params.id) return res.render('404')
        const id = req.params.id

        const contato = new Contato(req.body)
        await contato.edit(req.params.id)

        if(contato.errors.length > 0) {
            req.flash('errors', contato.errors)
            req.session.save(function() {
                return res.redirect(`/contato/index/${id}`) 
            })
            return
        }

        req.flash('success', 'Seu contato foi editado com sucesso.')
        req.session.save(function() {
            return res.redirect(`/contato/index/${id}`)
        })
    } catch(e) {
        console.log(e)
        res.render('404')
    }
}
