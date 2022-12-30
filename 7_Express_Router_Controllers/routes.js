const express = require('express')
const route = express.Router()
const homeController = require('./controllers/homeController')
const contatoController = require('./controllers/contatoController')

// Rotas da home
route.get('/', homeController.paginaIniciAL)
route.post('/', homeController.envioInput)

// Rotas para contato
route.get('/contato', contatoController.paginaContato)

module.exports = route