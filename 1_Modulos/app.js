// const modulo1 = require('./modulo1')
const { nome, sobrenome, nomeCompleto, Pessoa } = require('./modulo1')
// const multiplicacao = require(''./A/B/C/D/modulo2'')
// const numero = require(''./A/B/C/D/modulo2'')
const Animal = require('./A/B/C/D/modulo2')

const pessoa = new Pessoa('Matheus')

console.log(pessoa)
console.log(nome)
console.log(sobrenome)
nomeCompleto()

// console.log(multiplicacao(2, 2))
// console.log(numero)

const cachorro = new Animal('Cachorro', 'Canídeos')
console.log(cachorro)

const path = require('path')
console.log(__filename) // Caminho absoluto do arquivo atual
console.log(__dirname) // Caminho absoluto do diretorio atual

console.log(path.resolve(__dirname, '..', '..', 'arquivos', 'imagens'))