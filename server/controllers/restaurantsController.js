const Restaurant=require('../models/restaurant');

module.exports={
    get: async (req,res)=>{
        try{
            const restaurants= await Restaurant.find();
            res.json(restaurants);
        } catch (error){
            res.status(500).json({message:error.message})
        } 
    },
    getById: async (request, response) => {
        Restaurant.findOne({id:request.params.id} , (err, restaurant) => {
            if (err) {
                response.status(500).json(err);
                return;
            }
            response.json(restaurant);
        })
    },
}


    // post: async(request, response) => {
    //     // console.log("res ",request);
    //         const restaurant = new Restaurant({
    //             id : request?.body.id,
    //             name: request?.body.name, 
    //             chef_id:request?.body.chef_id,
    //             dishes_id:request?.body.dishes_id,
    //             popular:request?.body.popular,
    //             signuture_dish_id:request?.body.signuture_dish_id ,
    //             src: request?.body.src
    //         });
    //     try{
    //         const newRes= await restaurant.save();
    //         response.status(201).json(newRes);
    //     }catch(err){
    //         response.status(400).json({message:err.message})
    //     } 
    // }