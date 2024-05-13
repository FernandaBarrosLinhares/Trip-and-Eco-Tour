const { Router } = require("express");
const DestinoController = require("../controllers/DestinoController");
const { validacaoDestino } = require("../middleware/validacaoDestino");
const {auth}= require("../middleware/auth");

const destinoRoutes = new Router()



destinoRoutes.post('/',auth,validacaoDestino ,DestinoController.cadastrar
                 /*  
            #swagger.tags = ['Destino'],
             #swagger.security = [{
            "apiKeyAuth": []
            #swagger.parameters['body'] = {
                in: 'body',
                description: 'Adiciona um novo Destino',
                schema: {
                    $nome: "Trilha do Saquinho",
                    $descrição: "Trilha leve",
                    $localidade: "Praia do Sonho",
                    $coordenada_geografica: 10,2,
                    $usuario_id: 1,
            }
        }
    */
)

destinoRoutes.get('/', auth, DestinoController.listar

/*  
            #swagger.tags = ['Listar Destino']
            #swagger.description= "Lista de destinos de um usuario"
        
        }
    */

 
)

destinoRoutes.get('/:id', auth, DestinoController.listarUmDestino
     
         //   #swagger.tags = ['Listar Destino por ID'],

        
    
)

destinoRoutes.put('/:id', auth, DestinoController.atualizarDestino
    /*  
            #swagger.tags = ['Atualizar Destino'],
            #swagger.parameters['body'] = {
                in: 'body',
                description: 'Atualiza o destino usuário',
                schema: { Costa da Lagoa
                    $nome: "Trilha da Costa da Lagoa",
                    $descrição: "Trilha leve",
                    $localidade: "Lagoa da Conceição",
                    $coordenada_geografica: 10,2,
                    $usuario_id: 19,
            }
        }
    */
);

destinoRoutes.delete('/:id', auth, DestinoController.deletarDestino
    /*  
            #swagger.tags = ['Deletar destino'],
            #swagger.description: 'Deletar o destino de um  usuário',
                
        
    */
)

module.exports = destinoRoutes 