const express = require('express')
const route = express.Router()
const homeController = require('./src/controllers/homeController')
const contatoController = require('./src/controllers/contatoController')

// Rotas da home
route.get('/', homeController.paginaIniciAL)
route.post('/', homeController.envioInput)

// Rotas para contato
route.get('/contato', contatoController.paginaContato)

module.exports = route