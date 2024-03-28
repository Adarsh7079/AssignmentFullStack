import {User} from "../models/user.models.js"
import bcrypt from "bcrypt"
import {sendCookie} from "../utils/feature.js"
import {ApiError} from "../utils/ApiError.js"

// *********************** Register API **********************
export const register=async(req,res,next)=>{
    try{
        const {FullName,email,password}=req.body;
        //find user exist or not 
        let user=await User.findOne({email});
       
        //if user exist 
        if(user)
        {
            return next(new ApiError(401,"user already register"));

        }
        else
        {
            const resp=new User({FullName, email,password});
            await resp.save();
            res.status(201).json({
                    message:"user register",
                });
        }
    }
    catch(error){
        // res.status(401).json({
        //     message:"something wrong",
        //     success:false,
        //     user:req.user,
        // })
        // console.log(error)
        next(error)
    }
}

// ************ LOGIN API ****************
export const  login=async(req,res,next)=>{
    let token
    try{
        const {email,password}=req.body;
        // console.log("boday ",req.body.email)
        if(!email || !password)
        {
            return res.status(400).json({error:"Please fill the data "})
        }
        const user =await User.findOne({email});
        
        if(!user)  {
            return res.status(400).json({error:"bad request "})

        }
        else
        {
            const isMatch = await bcrypt.compare(password,user.password);

            token=await user.generateAuthToken();
            // console.log(token)
            res.cookie("jwtoken",token,{
                expires:new Date(Date.now()+25892000000),
                httpOnly:true
            });
            if(!isMatch) {
                return next(new ErrorHandler("Invalid Credientauil",401));
    
            }
            else
            {
                res.json({message:"user login successfully "})
            }
          
          // sendCookie(user,res,`welcome back ${user.Full_Name}`) ;
        }
       
    }
    catch(error){
       return res.status(401).json({
            message:"wrong crediential",
            success:false,
            user:req.user,
        })
      //  console.log(error)
       // next(error)
    }
};
// *******  Get LogOut API  ***** */

export const logout=(req,res)=>{
    res
    .status(200)
    .cookie("token","",{
        expires:new Date(Date.now()),
        sameSite:process.env.NODE_ENV==="Development" ?"lax":"none",
        secure:process.env.NODE_ENV==="Development" ?false:true,
    }).json({
        success:true,
        user:req.user,
    })
};
// **************** get user API  ****************

export  const getMyProfile=(req,res)=>{
    res.status(200).json({
        success:true,
        user:req.user,
    })
};