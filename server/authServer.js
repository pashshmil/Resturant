require('dotenv').config()
const express= require('express');
const app=express();
const jwt = require('jsonwebtoken');
app.use(express.json());
const router=express.Router();
const cors= require('cors');
app.use(
    cors({
        origin:"http://localhost:3000",
            credentials:true,   
    })
)
let tokens=[];
app.post('/token ',(request, response) => {
    console.log("check");
    const refreshToken=request.body.token;
    if(refreshToken==null) return response.sendStatus(401);
    if(!tokens.includes(refreshToken)) return response.sendStatus(403);
    jwt.verify(refreshToken,process.env.REFRESH_TOKEN_SECRET,(err,user)=>{
        if(err) return response.sendStatus(403)
        const accessToken=generateAccessToken({email:user.email})
        response.json({accessToken:accessToken})
    })
});

app.delete('/logout',(req,res)=>{
    tokens=tokens.filter(token=>token!==req.body.token);
    res.sendStatus(204);
})

app.post('/login',(request, response) => {
    const email=request.body.email;
    // const password=request.body.password;
    const user={email:email};
    const accessToken=generateAccessToken(user);
    const refreshToken=jwt.sign(user,process.env.REFRESH_TOKEN_SECRET);
    tokens.push(refreshToken);
    response.json({accessToken:accessToken,refreshToken:refreshToken})
});

function generateAccessToken(user){
    return jwt.sign(user,process.env.ACCESS_TOKEN_SECRET,{expiresIn: '35s'});
}


// function authenticateToken(req,res,next){
//     const authHeader=req.headers['authorization']
//     const token=authHeader&&authHeader.split(' ')[1];     
//     if(token==null) return res.sendStatus(401);
//     jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,user)=>{
//         if(err) return res.status(403);
//         req.user=user;
//         next();
//     })
// }


app.listen(4000,()=>{
    console.log("listen to 4000");
})
