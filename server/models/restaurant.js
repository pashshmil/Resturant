const mongoose=require('mongoose');

const restaurantSchema = new mongoose.Schema({
    // id: {
    //     type: Number,
    //     required: true
    // },
    name:{
        type: String,
        required: true
    },
    chef_id:{
        type: Number,
        required: true
    },
    dishes_id:{
        type: [],
        required: true
    },
    popular:{
        type: Boolean,
        required: true,
        default: false
    },
    signuture_dish_id: {
        type:Number,
        required:true
    },
    src: {
        type:String,
        required:true
    },
      
})

module.exports=mongoose.model('Restaurant',restaurantSchema,'restaurants');