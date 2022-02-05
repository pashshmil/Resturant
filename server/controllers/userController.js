const Users=require('../models/user');
const jwt = require('jsonwebtoken');

module.exports={
    login: (request, response) => {
        console.log("data ",request.body);
        const email=request.body.email;
        // const password=request.body.password;
        const accessToken=jwt.sign({email:email},process.env.ACCESS_TOKEN_SECRET);
        response.json({accessToken:accessToken})
    },
    getUser: (req, res) => {
        Users.findOne({email:req.user.email} , (err, user) => {
            if (err) {
                response.status(500).json(err);
                return;
            }
            res.json(user);
        })
    }, 
}

