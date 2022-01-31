const Chef=require('../models/chef');

module.exports={
    get: async (req,res)=>{
        try{
            const chefes= await Chef.find();
            res.json(chefes);
        } catch (error){
            res.status(500).json({message:error.message})
        } 
    },
    getById: async (request, response) => {
        Chef.findOne({id:request.params.id} , (err, chef) => {
            if (err) {
                response.status(500).json(err);
                return;
            }
            response.json(chef);
        })
    },
}