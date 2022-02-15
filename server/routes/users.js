
require('dotenv').config()
const express= require('express');
const router=express.Router();
const controller=require('../controllers/userController');
const jwt = require('jsonwebtoken');

router.post('/',controller.postUser);

router.post('/login',controller.postToken);

router.get('/login',authenticateToken,controller.getUser);


// router.get('/login',controller.chekUser);

function authenticateToken(req,res,next){
    const authHeader=req.headers['authorization']
    const token=authHeader&&authHeader.split(' ')[1];     
    if(token==null) return res.sendStatus(401);
    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,user)=>{
        if(err) return res.status(403);
        req.user=user;
        next();
    })
}
module.exports=router;