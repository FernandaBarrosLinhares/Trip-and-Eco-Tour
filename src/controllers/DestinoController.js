const Destino = require('../models/Destino');
const Usuario = require('../models/Usuario');

class DestinoController{
    async cadastrar(req,res){
        try {
            const {nome,descricao,localidade, coordenadas_geograficas}= req.body;
            const usuario_id = req.payload ? req.payload.sub : null;
        
            if(!nome || !descricao || !localidade || !coordenadas_geograficas)
                return res.status(400).json({messagem:'Dados obrigatórios'})
        
            const destino = await   Destino.create({
                nome,
                descricao,
                localidade,
                coordenadas_geograficas,
                usuario_id,
                
            }) ;
            res.status(201).json(destino);
        
           } catch (error) {
            console.log(error)
           }

    }
    
    async listar(req, res) {
        try {
            const usuario_id_autenticado = req.payload ? req.payload.sub : null;
            const usuario_logado = await Usuario.findByPk(usuario_id_autenticado);
            
            
            if(!usuario_logado) {
                return res.status(404).json({message:'Ususario não esta logado'})
            }
             const lista_destinos = await Destino.findAll({where:{usuario_id:usuario_id_autenticado}});
             return res.status(200).json({lista_destinos})
    
     
        } catch (error) {
            console.error(error); 
            return res.status(500).json({ error: 'Erro interno no servidor' });
        }
    }

    async listarUmDestino(req, res) {
        try {
            const usuario_id_autenticado = req.payload ? req.payload.sub : null;
            const { id } = req.params;
    
            const destino = await Destino.findByPk(id);
            
            
            if (!destino) {
                return res.status(404).json({ message: "Destino não encontrado" });
            }

            if (usuario_id_autenticado !== destino.usuario_id) {
                return res.status(401).json({ message: "Acesso negado" });
            }
    
            return res.status(200).json(destino);
    
        } catch (error) {
            console.error(error.message);
            res.status(500).json({ error: 'Não foi possível listar o destino especifico' });
        }
    }
    async atualizarDestino(req,res){
        try {
            const {id}= req.params;
            const usuario_id_autenticados = req.payload ? req.payload.sub : null;
            const {nome,descricao,localidade, coordenadas_geograficas} = req.body;

            const destino = await Destino.findByPk(id);

            if(!destino){
                return res.status(404).json({ message: "Destino não encontrado" });
            }
            if(usuario_id_autenticados !== destino.usuario_id){
                return res.status(401).json({ message: "Acesso negado" });
            }
            await destino.update({ nome, descricao, localidade, coordenadas_geograficas });

            return res.status(200).json(destino);


        } catch (error) {
            console.error(error.message);
            res.status(500).json({ error: 'Erro interno no servidor' });
        }
    }
    async deletarDestino(req, res) {
        try {
            const { id } = req.params;
            const usuario_id_autenticado = req.payload ? req.payload.sub : null;

            const destino = await Destino.findByPk(id);

            if (!destino) {
                return res.status(404).json({ message: "Destino não encontrado" });
            }

            if (usuario_id_autenticado !== destino.usuario_id) {
                return res.status(401).json({ message: "Acesso negado" });
            }

            await destino.destroy();

            return res.status(204).send();
        } catch (error) {
            console.error(error.message);
            res.status(500).json({ error: 'Erro interno no servidor' });
        }
    }
}


module.exports = new DestinoController();