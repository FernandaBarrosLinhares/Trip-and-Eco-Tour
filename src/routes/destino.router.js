const { Router } = require("express");
const DestinoController = require("../controllers/DestinoController");
const { validacaoDestino } = require("../middleware/validacaoDestino");
const {auth}= require("../middleware/auth");

const destinoRoutes = new Router()



destinoRoutes.post('/',auth,validacaoDestino ,DestinoController.cadastrar)

destinoRoutes.get('/', auth, DestinoController.listar)

destinoRoutes.get('/:id', auth, DestinoController.listarUmDestino)

destinoRoutes.put('/:id', auth, DestinoController.atualizarDestino);

destinoRoutes.delete('/:id', auth, DestinoController.deletarDestino)

module.exports = destinoRoutes 