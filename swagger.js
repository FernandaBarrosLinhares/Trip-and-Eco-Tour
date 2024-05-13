const swaggerAutogen =require('swagger-autogen')();
const {config} = require('dotenv')
config()

const doc ={
    info:{
        title:"Trip and Tour",
        description: "O Viagem365 é uma plataforma que visa promover viagens sustentáveis e experiências positivas para os usuários",
        version: "1.0.0"
    },
    host: `localhost:${process.env.PORT_API}`,
    security: [{"apiKeyAuth":[]}],
    securityDefinitions: {
        apiKeyAuth: {
            type: 'apikey',
            in:'header',
            name: 'authorization',
            description: 'Token de Autenticação'
        }
    }
};

const outputFile = './src/routes/swagger.json';
const routes = ['./src/server.js'];

swaggerAutogen(outputFile, routes,doc);