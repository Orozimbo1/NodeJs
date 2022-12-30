require('dotenv').config()

const express = require('express')
const path = require('path') 
const mongoose = require('mongoose')

const { middlewareGlobal } = require('./src/middlewares/middleware')

const app = express()

mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        app.emit('pronto')
    })
    .catch(e => console.log(e))

mongoose

const port = 3000
const routes = require('./routes')

app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.resolve(__dirname, 'public')))

app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

// Nossos próprios middlewares
app.use(middlewareGlobal)

app.use(routes)

app.on('pronto', () => {
    app.listen(port, () => {
        console.log('Acessar http://localhost:3000')
        console.log('Servidor rodando na porta 3000')
    })
})