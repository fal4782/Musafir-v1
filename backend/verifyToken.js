const jwt=require('jsonwebtoken');
require('dotenv').config()

function authenticate(req,res,next){
    const token=req.headers.authorization;
    if(!token){
        return res.status(401).send('Invalid token')
    }
    const secret=process.env.ACCESS_TOKEN_SECRET;
    jwt.verify(token,secret,(err,result)=>{
        console.log(result);
        if(err){
           return res.status(401).send('Invalid token')
        }
        next();
    })
}
module.exports= authenticate