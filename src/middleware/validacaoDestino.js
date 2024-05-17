const yup = require('yup');

const schema = yup.object({
    nome:yup.string().required(),
    descricao:yup.string().required(),
    localidade:yup.string().required(),
    coordenadas_geograficas:yup.number().required(),
   
})

const validacaoDestino= async(req,res,next)=>{
    const {body}=req;

   try {
    await schema.validate(body,{abortEarly:false});
   
    
   } catch (error) {
    res.status(400).json({erro: error.errors})
   }

   next();
}

module.exports = {validacaoDestino}