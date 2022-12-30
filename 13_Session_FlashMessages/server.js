require('dotenv').config()

const express = require('express')
const path = require('path') 
const mongoose = require('mongoose')

const { middlewareGlobal } = require('./src/middlewares/middleware')

const app = express()

mongoose.set('strictQuery', false)
mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        app.emit('pronto')
    })
    .catch(e => console.log(e))

const session = require('express-session')
const MongoStore = require('connect-mongo')
const flash = require('connect-flash')

const port = 3000
const routes = require('./routes')

app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.resolve(__dirname, 'public')))

const sessionOptions = session({
    secret: process.env.SECRET,
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
})
app.use(sessionOptions)
app.use(flash())

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