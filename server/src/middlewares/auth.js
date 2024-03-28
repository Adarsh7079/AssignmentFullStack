import {User}  from "../models/user.models.js"
import jwt from "jsonwebtoken";

export const isAuthenticated =async (req,res,next)=>{
    try{
        const token=req.cookies.jwtoken;
        
        const verifyToken=jwt.verify(token,process.env.JWT_SECRET)
        

        const rootuser = await User.findOne({ _id: verifyToken._id, "tokens.token": token });
        //  console.log(rootuser)
        if(!rootuser){
            throw new Error('User not Found')
        }
        req.token=token;
        req.rootuser=rootuser;
        req.userId=rootuser._id;
        next()
    }
    catch(err)
    {
        res.status(401).send('unauthorize token provided')
        console.log(err)
    }
   
};
