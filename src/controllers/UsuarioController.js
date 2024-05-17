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
    async listarUsuarioAutenticado(req, res) {
        try {
            const usuario_id_autenticado = req.payload ? req.payload.sub : null;

            if (!usuario_id_autenticado) {
                return res.status(401).json({ message: 'Usuário não autenticado' });
            }

            const usuario_logado = await Usuario.findByPk(usuario_id_autenticado);
            if (!usuario_logado) {
                return res.status(404).json({ message: 'Usuário não encontrado' });
            }

            res.status(200).json(usuario_logado);

        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro interno no servidor' });
        }
    }

    async atualizarUsuario(req, res) {
        try {
            const usuario_id_autenticado = req.payload ? req.payload.sub : null;

            if (!usuario_id_autenticado) {
                return res.status(401).json({ message: 'Usuário não autenticado' });
            }

            const { nome, sexo, cpf, email, senha, data_nascimento, endereco } = req.body;

            const usuario_logado = await Usuario.findByPk(usuario_id_autenticado);
            if (!usuario_logado) {
                return res.status(404).json({ message: 'Usuário não encontrado' });
            }

            await usuario_logado.update({
                nome, sexo, cpf, email, senha, data_nascimento, endereco
            });

            res.status(200).json(usuario_logado);

        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao atualizar o usuário' });
        }
    }

    async deletarUsuario(req, res) {
        try {
            const usuario_id_autenticado = req.payload ? req.payload.sub : null;

            if (!usuario_id_autenticado) {
                return res.status(401).json({ message: 'Usuário não autenticado' });
            }

            const usuario_logado = await Usuario.findByPk(usuario_id_autenticado);
            if (!usuario_logado) {
                return res.status(404).json({ message: 'Usuário não encontrado' });
            }

            await usuario_logado.destroy();

            res.status(204).json();

        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao deletar o usuário' });
        }
    }
   
}

module.exports = new UsuarioController();