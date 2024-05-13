const { Router } = require("express");
const LoginController = require("../controllers/LoginController");

const loginRoutes = new Router()

loginRoutes.post('/', LoginController.login 
    /*  
            #swagger.tags = ['Login'],
            #swagger.parameters['body'] = {
                in: 'body',
                description: 'Login de um  usuário',
                schema: { Costa da Lagoa
                    $email: "ferg@email.com",
                    $senha: "luta",
            }
        }
    */
)


module.exports = loginRoutes