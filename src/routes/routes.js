const {Router}=require("express");
const usuarioRoutes = require('./usuario.router');
const destinoRoutes = require('./destino.router');
const loginRoutes = require('./login.router');



const routes = Router();

routes.use('/usuarios', usuarioRoutes);
routes.use('/destinos', destinoRoutes);
routes.use('/login', loginRoutes);

module.exports = routes;
