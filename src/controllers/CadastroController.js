// const Cadastro = require("../models/Cadastro");



// class CadastroController{
//     async cadastrar(req,res){
//      try {
//         const usuario_id = req.body.usuario_id;
//         const destino_id = req.body.destino_id;

//         const cadastro = await Cadastro.create({
//             usuario_id,
//             destino_id
//         })

//         res.sataus(201).json(cadastro);
//      } catch (error) {
//         res.status(500).json({mensagem: 'Erro ao realizar cadastro'});
//      }
//     }
// }

// module.exports =  new CadastroController();