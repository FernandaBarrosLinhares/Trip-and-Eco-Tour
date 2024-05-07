const { Router } = require("express");
const Usuario = require('../models/Usuario');
const {sign} = require('jsonwebtoken');
//Importar o auth quando criar as rotas get
// const validacaoUsuarios = require('../middleware/validacaoUsuarios'); com a rotas juntas

const usuarioRoutes = new Router()

//Rota Usuario
usuarioRoutes.post('/',async  (req, res) => {

    try {
        const { nome, sexo, cpf, email, senha, data_nascimento, endereco } = req.body;

        if(!nome || !sexo || !cpf || !email || !senha || !data_nascimento ||!endereco) {
            return res.status(400).json({messagem:'Dados obrigatórios'})
        }

        const usuario = await Usuario.create({
            nome,
            sexo,
            cpf,
            email,
            senha,
            data_nascimento,
            endereco
        }) ;
        

        res.status(201).json(usuario);
        
     } catch (error) {
        res.status(500).json({ error: 'Não possível cadastrar o usuário' })
    }
})

module.exports = usuarioRoutes