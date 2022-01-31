const Dish=require('../models/dish');

module.exports={
    get: async (req,res)=>{
        try{
            const dishes= await Dish.find();
            res.json(dishes);
        } catch (error){
            res.status(500).json({message:error.message})
        } 
    },
    getById: async (request, response) => {
        Dish.findOne({id:request.params.id} , (err, dish) => {
            if (err) {
                response.status(500).json(err);
                return;
            }
            response.json(dish);
        })
    },
}