const {Router}=require("express");
const usuarioRoutes = require('./usuario.router');
const destinoRoutes = require('./destino.router');
const loginRoutes = require('./login.router');
const cadastroRoutes = require('./cadastro.router');



const routes = Router();

routes.use('/usuarios', usuarioRoutes);
routes.use('/destinos', destinoRoutes);
routes.use('/login', loginRoutes);
routes.use('/cadastros', cadastroRoutes);

module.exports = routes;
