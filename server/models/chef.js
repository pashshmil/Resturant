const mongoose=require('mongoose');

const chefSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    restaurants_id:{
        type: [],
        required: true,
    },
    chefOfWeek: {
        type:Boolean,
        required:true,
        default:false
    },
    src: {
        type:String,
        required:true
    }, 
})

module.exports=mongoose.model('Chef',chefSchema,'chefs');