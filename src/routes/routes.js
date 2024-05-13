const {Router}=require("express");
const usuarioRoutes = require('./usuario.router');
const destinoRoutes = require('./destino.router');
const loginRoutes = require('./login.router');




const routes = Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

routes.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
routes.use('/usuarios', usuarioRoutes);
routes.use('/destinos', destinoRoutes);
routes.use('/login', loginRoutes);


module.exports = routes;
