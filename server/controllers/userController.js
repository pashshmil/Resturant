const Users=require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config()

module.exports={
    postUser: async (req, res) => {
        const hashedPassword=await bcrypt.hash(req.body.password,10); 
        const user=new Users({email:req.body.email,password:hashedPassword})
        try{
            const newUser= await user.save();
            res.status(201).json(newUser);
        }catch(err){
            res.status(400).json({message:err.message})
        } 
    },

    getUser: async (req, res) => {
        Users.findOne({email:req.user.email} , (err, user) => {
            if (err) {
                res.status(500).json(err);
                return;
            }
            if(user==null){
                return res.status(400).send("cannot find user!!!");
            }
            res.json(user);
        });
    }, 
    
    postToken: (req, res) => {
        Users.findOne({email:req.body.email} , (err, user) => {
            if (err) {
                res.status(500).json(err);
                return;
            }
            if(user==null){
                return res.status(400).send("cannot find user!!!");
            }
            try{
                if(bcrypt.compare(req.body.password,user.password)){
                    const accessToken=jwt.sign({email:req.body.email},process.env.ACCESS_TOKEN_SECRET,{expiresIn:'60s'});
                    res.json({accessToken:accessToken})   
                } else {
                    res.send("not allowed");
                }
            }catch{
                res.status(500).send();
            }
        });
    }
}

