const { DataTypes } = require('sequelize')
const { connection } = require('../database/connection')

const Destino = connection.define('destinos',{
    nome:{
        type: DataTypes.STRING,
    },
    descricao:{
        type: DataTypes.STRING,
    },

    localidade:{
        type: DataTypes.STRING,
    },
    coordenadas_geograficas:{
        type: DataTypes.STRING,
    },
    usuario_id:{
        type: DataTypes.INTEGER
    }
})

module.exports= Destino