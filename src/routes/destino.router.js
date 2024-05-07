const { Router } = require("express");
// const Destino = require("../models/Destino");
//impprtar auth
const DestinoController = require("../controllers/DestinoController");

const destinoRoutes = new Router()

//Rota destinos

destinoRoutes.post('/', DestinoController.cadastrar)


module.exports = destinoRoutes 