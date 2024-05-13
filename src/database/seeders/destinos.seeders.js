const { QueryInterface } = require("sequelize");
const Destino = require('../../models/Destino')


module.exports = {
    up: async (QueryInterface, Sequelize) => {
        await Destino.bulkCreate([
            {
            
                nome: "Praia Mole",
                descricao: "praia",
                localidade:"Leste Florianopolis",
                coordenadas_geograficas:"27.5",
                usuario_id: 1
                
            },
            {
                nome: "Trila do Saquinho",
                descricao: "trilha facil",
                localidade:"Sul Florianopolis",
                coordenadas_geograficas:"27.8",
                usuario_id: 2
            },
            {
                nome: "Trilha das Aranhas",
                descricao: "trilha dificil",
                localidade:"Norte Florianopolis",
                coordenadas_geograficas:"27.1",
                usuario_id: 3

            },
            {
                nome: "Trilha Naufragados",
                descricao: "trilha nivel medio",
                localidade:"Sul Florianopolis",
                coordenadas_geograficas:"27.1",
                usuario_id: 4

            },
            {
                nome: "Praia da Daniela",
                descricao: "acesso veiculo",
                localidade:"Norte Florianopolis",
                coordenadas_geograficas:"27.3",
                usuario_id: 5

            }

        ])

    
    },
    down:async(QueryInterface,Sequelize) =>{
        await Destino.destroy({
            nome:[
                "Praia Mole",
                "Trilha do Saquinho",
                "Trilha das Aranhas",
                "Trilha Naufragados",
                "Praia da Daniela"

            ]

        })

    }
}
