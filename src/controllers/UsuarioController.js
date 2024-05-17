const Usuario = require('../models/Usuario');


class UsuarioController{

    async cadastrar(req,res){
        try {
            const { nome, sexo, cpf, email, senha, data_nascimento, endereco } = req.body;
    
            if(!nome || !sexo || !cpf || !email || !senha || !data_nascimento ||!endereco) {
                return res.status(400).json({messagem:'Dados obrigatórios'})
            }
            const cpf_unique = await Usuario.findOne({where:{cpf:cpf}})    
        
            if(cpf_unique){
                return res.status(409).json({})
            }   
            const email_unique = await Usuario.findOne({where:{email:email}})    
            
            if(email_unique){
                return res.status(409).json({})
            }  
            if (!data_nascimento.match(/\d{4}-\d{2}-\d{2}/gm)) {
                return res.status(400).json({ message: 'A data de nascimento é não está no formato correto' })
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
            console.log(error)
            res.status(500).json({ error: 'Não possível cadastrar o usuário' })
        }
    }
}

module.exports = new UsuarioController();