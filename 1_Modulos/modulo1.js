const nome = 'Matheus'
const sobrenome = 'Orozimbo'

const nomeCompleto = () => console.log(nome + ' ' + sobrenome)

class Pessoa {
    constructor(nome) {
        this.nome = nome
    }
}

// 1º forma de exportar
// module.exports.nome = nome
// module.exports.sobrenome = sobrenome
// module.exports.nomeCompleto = nomeCompleto

// 1º forma de exportar
exports.nome = nome
exports.sobrenome = sobrenome
exports.nomeCompleto = nomeCompleto
exports.Pessoa = Pessoa

// 3º forma de exportar
this.qualquerCoisa = 'forma incomum de exportação'
