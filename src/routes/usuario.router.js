const { Router } = require("express");
const UsuarioController = require("../controllers/UsuarioController");
const { validacaoUsuarios } = require("../middleware/validacaoUsuario");
const {auth}= require("../middleware/auth");


const usuarioRoutes = new Router()


usuarioRoutes.post('/',validacaoUsuarios ,UsuarioController.cadastrar

               /*  
            #swagger.tags = ['Usuario'],
            #swagger.parameters['body'] = {
                in: 'body',
                description: 'Adiciona um novo Usuario',
                schema: {
                    $nome: "Fernanda Linhares",
                    $sexo: "feminino",
                    $cpf: "025,251,001-47",
                    $endereco: "Rua da Lua, n 2",
                    $email: "devfernandalinhares@gmail.com",
                    $senha: "123456",
                    $data_nascimento: "31-05-1980"
            }
        }
    */)

usuarioRoutes.get('/', auth, UsuarioController.listarUsuarioAutenticado
      //   #swagger.tags = ['Listar Usuario],
)
usuarioRoutes.put('/:id', auth, UsuarioController.atualizarUsuario
      /*  
            #swagger.tags = ['Atualizar Usuario'],
            #swagger.parameters['body'] = {
                in: 'body',
                description: 'Atualiza o usuário',
                schema: { 
                    $nome: "Fernanda Barros Linhares",
                    $sexo: "feminino",
                    $cpf: "025,251,001-47",
                    $endereco: "Rua da Lua, n 2",
                    $email: "devfernandalinhares@gmail.com",
                    $senha: "123456",
                    $data_nascimento: "31-05-1980"
            }
        }
    */
)
usuarioRoutes.delete('/:id', auth, UsuarioController.deletarUsuario
      /*  
            #swagger.tags = ['Deletar usuario'],
            #swagger.description: 'Deletar  um  usuário',
                
        
    */
)

module.exports = usuarioRoutes