const { DataTypes } = require('sequelize')
const { connection } = require('../database/connection')

const Usuario = connection.define('usuarios',{
    nome:{
        type: DataTypes.STRING,
    },
    sexo:{
        type: DataTypes.STRING,
    },
    
    cpf:{
        type: DataTypes.STRING,
        
    },
    email:{
        type: DataTypes.STRING,
    },
    senha:{
        type: DataTypes.STRING,
    },
    data_nascimento:{
        type:DataTypes.DATE
    },
    endereco:{
        type: DataTypes.STRING
    }
})

module.exports= Usuario 