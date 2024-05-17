const { QueryInterface } = require("sequelize")
const Usuario = require('../../models/Usuario')

module.exports = {
    up: async (QueryInterface, Sequelize) => {
        await Usuario.bulkCreate([
            {
                id: 1,
                nome: "Fernanda",
                sexo: "feminino",
                cpf:"025.144.117-36",
                endereco:"Rua da Mares, n 25",
                email: "fer@email.com",
                senha:"123456",
                data_nascimento: "1980-05-31"

            },
            {
                id:2,
                nome: "Guilherme",
                sexo: "masculino",
                cpf:"036.144.117-36",
                endereco:"Rua Ipes Amarelos, n 5",
                email: "gui@email.com",
                senha:"pokemon",
                data_nascimento: "2017-05-11"

            },
            {
                id:3,
                nome: "Renata",
                sexo: "feminino",
                cpf:"045.144.117-36",
                endereco:"Rua sem Saida , n 2005",
                email: "re@email.com",
                senha:"tuga",
                data_nascimento: "1977-04-15"

            },
            {
                id: 4,
                nome: "Pietro",
                sexo: "masculinono",
                cpf:"055.144.877-38",
                endereco:"Rua Embuia, n 25",
                email: "pe@email.com",
                senha:"pe123",
                data_nascimento: "2002-06-18"

            },
            {
                id:5,
                nome: "Gabriela",
                sexo: "feminino",
                cpf:"095.144.178-36",
                endereco:"Rua Bohemia, n 75",
                email: "gabi@email.com",
                senha:"yoga",
                data_nascimento: "1999-02-03"

            }

        ])

    
    },
    down:async(QueryInterface,Sequelize) =>{
        await Usuario.destroy({
            cpf:["095.144.178-36",
                "055.144.877-38",
                "045.144.117-36",
                "036.144.117-36",
                "025.144.117-36"


            ]

        })

    }
}
