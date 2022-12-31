const mongoose = require('mongoose');
const validator = require('validator')
const bcryptjs = require('bcryptjs')

const ContatoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    sobrenome: {
        type: String,
        required: false,
        default: ''
    },
    telefone: {
        type: String,
        required: false,
        default: ''
    },
    email: {
        type: String,
        required: true
    },
    data: {
        type: Date,
        default: Date.now
    }
});

const ContatoModel = mongoose.model('Contato', ContatoSchema);

class Contato {
    constructor(body) {
        this.body = body
        this.errors = []
        this.contato = null
    }

    async register() {
        this.valida()

        if(this.errors.length > 0) return

        this.contato = await ContatoModel.create(this.body)
    }

    valida() {
        this.cleanUp()
        // Validação
        // o emai precisa ser válido
        if(!this.body.nome) this.errors.push('Nome é um campo obrigatório')
        if(!this.body.email && !validator.isEmail(this.body.email)) this.errors.push('Email inválido')
    }

    cleanUp() {
        for(let key in this.body){
            if(typeof this.body[key] !== 'string') {
                this.body[key] = ''
            }
        }

        this.body = {
            nome: this.body.nome,
            sobrenome: this.body.sobrenome,
            telefone: this.body.telefone,
            email: this.body.email
        }
    }

    async buscarContatoId(id) {
        if(typeof id !== 'string') return
        const contato = await ContatoModel.findById(id)
        return contato
    }
}

module.exports = Contato