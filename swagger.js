const swaggerAutogen =require('swagger-autogen')();


const doc ={
    info:{
        title:"Trip and Tour",
        description: "Uma api de exemplo basico",
        version: "1.0.0"
    },
    host: 'localhost:3000',
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