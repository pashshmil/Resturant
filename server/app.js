require('dotenv').config()
const express= require('express');
const cors= require('cors');
const app=express();
const mongoose=require('mongoose');
app.use(express.json());
app.use(
    cors({
        origin:"http://localhost:3000",
            credentials:true,   
    })
)

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

const userRoute=require('./routes/user');
app.use('/auth',userRoute );

mongoose.connection.once('open',()=>{
    console.log("connect to DB ");
    app.listen(3005,()=>{
        console.log("listen to 3005");
    })
});



