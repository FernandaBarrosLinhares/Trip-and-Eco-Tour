const Usuario = require('../models/Usuario');


class UsuarioController{

    async cadastrar(req,res){
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
    }
}

module.exports = new UsuarioController();