const { Router } = require("express");

const DestinoController = require("../controllers/DestinoController");

const destinoRoutes = new Router()



destinoRoutes.post('/', DestinoController.cadastrar)


module.exports = destinoRoutes 