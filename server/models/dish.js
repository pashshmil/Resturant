const mongoose=require('mongoose');

const dishSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    restaurant_id:{
        type: Number,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true,
    },
    type: {
        type:String,
        required:true
    },
    src: {
        type:String,
        required:true
    }, 
})


module.exports=mongoose.model('Dish',dishSchema,'dishes');