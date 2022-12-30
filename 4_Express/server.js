const express = require('express')

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato com a gente')
})

app.listen(port, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Servidor rodando na porta 3000')
})