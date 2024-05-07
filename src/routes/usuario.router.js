const { Router } = require("express");

const UsuarioController = require("../controllers/UsuarioController");


const usuarioRoutes = new Router()


usuarioRoutes.post('/', UsuarioController.cadastrar)

module.exports = usuarioRoutes