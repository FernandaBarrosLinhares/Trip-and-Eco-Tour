const { DataTypes } = require('sequelize')
const { connection } = require('../database/connection')

const Cadastro = connection.define('cadastros',{
    usuario_id:{
        type: DataTypes.INTEGER,
    },
    destino_id:{
        type: DataTypes.INTEGER,
    },
    
})

module.exports= Cadastro