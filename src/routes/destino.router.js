const { Router } = require("express");

const DestinoController = require("../controllers/DestinoController");
const { validacaoDestino } = require("../middleware/validacaoDestino");

const destinoRoutes = new Router()



destinoRoutes.post('/',validacaoDestino ,DestinoController.cadastrar)


module.exports = destinoRoutes 