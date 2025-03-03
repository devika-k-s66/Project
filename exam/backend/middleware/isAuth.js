const jwt=require("jsonwebtoken")

require('dotenv').config()

const isAuth =((req,res,next)=>{
    const {token}=req.cookies
    if (!token) {
        throw new Error("Token is not available");
        
    }
    const decode= jwt.decode(token,process.env.JWT_SECRET_KEY)

    if (!decode) {
        throw new Error("Token is invalid");
        
    }
    next()
})
module.exports=isAuth