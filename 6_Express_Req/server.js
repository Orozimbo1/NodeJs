const express = require('express')

const app = express()
const port = 3000

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
            Nome: <input type="text" name="nome" />
            <button>Enviar</button>
        </form>
    `)
})

app.post('/', (req, res) => {
    console.log(req.body) // req.body
    res.send(`O que voce me enviou foi: ${req.body.nome}`)
})

app.get('/testes/:id?', (req, res) => { 
    console.log(req.params) // req.params
    console.log(req.query) // req.query
    res.send('Oi')
})

app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato com a gente')
})

app.listen(port, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Servidor rodando na porta 3000')
})