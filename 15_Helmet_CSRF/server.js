require('dotenv').config()

const express = require('express')
const path = require('path') 
const mongoose = require('mongoose')
const helmet = require('helmet')
const csrf = require('csurf')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const flash = require('connect-flash')

const routes = require('./routes')
const { middlewareGlobal, checkCsrfError, csrfMiddleware } = require('./src/middlewares/middleware')

const port = 3000
const app = express()
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

mongoose.set('strictQuery', false)
mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        app.emit('pronto')
    })
    .catch(e => console.log(e))


app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.resolve(__dirname, 'public')))
app.use(sessionOptions)
app.use(flash())
app.use(helmet())
app.use(csrf())
// Nossos próprios middlewares
app.use(middlewareGlobal)
app.use(checkCsrfError)
app.use(csrfMiddleware)
app.use(routes)

app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')


app.on('pronto', () => {
    app.listen(port, () => {
        console.log('Acessar http://localhost:3000')
        console.log('Servidor rodando na porta 3000')
    })
})