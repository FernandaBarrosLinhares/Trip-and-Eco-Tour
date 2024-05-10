const { Router } = require("express");
const UsuarioController = require("../controllers/UsuarioController");
const { validacaoUsuarios } = require("../middleware/validacaoUsuario");


const usuarioRoutes = new Router()


usuarioRoutes.post('/',validacaoUsuarios ,UsuarioController.cadastrar

               /*  
            #swagger.tags = ['Usuario'],
            #swagger.parameters['body'] = {
                in: 'body',
                description: 'Adiciona um novo Aluno',
                schema: {
                    $nome: "Fernanda Linhares",
                    $sexo: "feminino",
                    $cpf: "025,251,001-47",
                    $endereço: "Rua da Lua, n 2",
                    $email: "devfernandalinhares@gmail.com",
                    $senha: "123456",
                    $data_nascimento: "31-05-1980"
            }
        }
    */)

module.exports = usuarioRoutes