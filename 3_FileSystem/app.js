const path = require('path')
const caminhoArquivo = path.resolve(__dirname, 'teste.json')
const escreve = require('./modules/escrever')
const ler = require('./modules/ler')

// const pessoas = [
//     { nome: 'Joao' },
//     { nome: 'Fabia' },
//     { nome: 'Maria' },
//     { nome: 'Andre' }
// ]
// const json = JSON.stringify(pessoas, '', 2)

// escreve(caminhoArquivo, json, 'w')

async function leArquivo(caminho) {
    const arquivo = await ler(caminho)
    renderizaDados(arquivo)
}

function renderizaDados(dados) {
    dados = JSON.parse(dados)
    dados.forEach(element => console.log(element.nome));
}

leArquivo(caminhoArquivo)