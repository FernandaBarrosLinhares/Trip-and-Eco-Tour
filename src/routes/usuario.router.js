const { Router } = require("express");
// const Usuario = require('../models/Usuario');
// const {sign} = require('jsonwebtoken');
const UsuarioController = require("../controllers/UsuarioController");
//Importar o auth quando criar as rotas get
// const validacaoUsuarios = require('../middleware/validacaoUsuarios'); com a rotas juntas

const usuarioRoutes = new Router()

//Rota Usuario
usuarioRoutes.post('/', UsuarioController.cadastrar)

module.exports = usuarioRoutes