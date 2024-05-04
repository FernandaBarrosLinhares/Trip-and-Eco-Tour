const { Router } = require("express");
const Usuario = require('../models/Usuario');
const {sign} = require('jsonwebtoken');



const routes = new Router()

//Rota teste
routes.get('/teste', async (req, res) => {
    res.json({name:'Hello world'});
}
)

//Rota Usuario
routes.post('/usuarios',async  (req, res) => {

    try {
        const { nome, sexo, cpf, email, senha, data_nascimento, endereco } = req.body;
        

        console.log('Dados recebidos:', req.body);

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

//Rota de Login
routes.post('/login', async (req, res) => {
    try {
        const email= req.body.email
        const senha = req.body.senha
    
        if(!email){
            return res.status(400).json({messagem:'O email é obrigatório'})
        }
        if(!senha){
            return res.status(400).json({messagem:'A senha é obrigatória'})   
        }

        const usuario = await Usuario.findOne({
            where:{email:email,senha:senha}
        })

        if(!usuario){
            return res.status(404).json({messagem:'nenhum usuario corresponde ao email e senha fornecido'})
        }

         //Usando o jwt
        
        const payload ={sub:usuario.id,email:usuario.email,nome:usuario.nome}

        console.log(process.env.SECRET_JWT)

        const token = sign(payload, process.env.SECRET_JWT)

        res.status(200).json({Token:token})

    

    } catch (error) {
        console.log(error.message)
        res.status(500).json({ error: 'Não possível cadastrar o usuario' })
    }       
})


module.exports = routes