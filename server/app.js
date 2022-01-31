const express= require('express');
const app=express();
const mongoose=require('mongoose');
require('dotenv').config();

const connectDB= async()=>{
    try{
        await mongoose.connect(process.env.DATABASE_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
    } catch (err){
        console.error(err);
    }
}
connectDB()
const restaurantsRoute=require('./routes/restaurants')
app.use('/restaurants',restaurantsRoute );

const dishesRoute=require('./routes/dishes')
app.use('/dishes',dishesRoute );

const chefsRoute=require('./routes/chefs')
app.use('/chefs',chefsRoute );
// const db=mongoose.connection
// db.on('error',(error)=>console.error("error"))
mongoose.connection.once('open',()=>{
    console.log("connect to DB ");
    app.listen(3005,()=>{
        console.log("listen to 3005");
    })
});

