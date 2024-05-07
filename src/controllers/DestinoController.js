const Destino = require('../models/Destino');

class DestinoController{
    async cadastrar(req,res){
        try {
            const {nome,descricao,localidade, coordenadas_geograficas, usuario_id}= req.body;
        
            if(!nome || !descricao || !localidade || !coordenadas_geograficas || !usuario_id)
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
}

module.exports = new DestinoController();