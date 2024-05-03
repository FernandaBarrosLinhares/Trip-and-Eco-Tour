const { DataTypes } = require('sequelize')
const { connection } = require('../database/connection')

const Destino = connection.define('Usuario',{
    nome:{
        type: DataTypes.STRING,
    },
    descricao:{
        type: DataTypes.STRING,
    },
    cpf:{
        type: DataTypes.STRING,
    },
    localidade:{
        type: DataTypes.STRING,
    },
    cordenadas_geograficas:{
        type: DataTypes.STRING,
    },
    usuario_id:{
        type: DataTypes.INTEGER
    }
})

module.exports= Destino