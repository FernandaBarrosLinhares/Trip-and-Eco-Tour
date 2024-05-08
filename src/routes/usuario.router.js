const { Router } = require("express");

const UsuarioController = require("../controllers/UsuarioController");
const { validacaoUsuarios } = require("../middleware/validacaoUsuario");


const usuarioRoutes = new Router()


usuarioRoutes.post('/',validacaoUsuarios ,UsuarioController.cadastrar)

module.exports = usuarioRoutes