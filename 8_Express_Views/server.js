const express = require('express')
const path = require('path')

const app = express()
const port = 3000
const routes = require('./routes')

app.use(express.urlencoded({ extended: true }))
app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

app.use(routes)

app.listen(port, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Servidor rodando na porta 3000')
})