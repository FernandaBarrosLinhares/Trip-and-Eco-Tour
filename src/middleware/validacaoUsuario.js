const yup = require('yup')

const schema = yup.object({
    nome: yup.string().required(),
    sexo:yup.string().required(),
    cpf:yup.string().required(),
    email:yup.string().required(),
    senha:yup.string().required(),
    data_nascimento:yup.string().required(),
    endereco:yup.string().required(),
});
const validacaoUsuarios = async(req, res, next)=>{
    const body = req.body;

    try {
       
        await schema.validate(body, { abortEarly: false });
        
      } catch (erro) {
        
        res.status(400).json({ erro: erro.errors });
      }
      next();
    };
    module.exports = {validacaoUsuarios}
