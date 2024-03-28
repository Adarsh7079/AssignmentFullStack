import jwt from "jsonwebtoken";



export const sendCookie=(user , res, message , statucode=200)=>{
    const token=jwt.sign({_id:user._id},process.env.JWT_SECRET)
     
    res
    .cookie("token",token,{
       httpOnly:true,
       maxAge:15*60*1000,
       sameSite: 'None',  // or 'Lax' depending on your requirements
       secure: process.env.NODE_ENV === 'development' ? false : true,

    }).json({
       success:true,
       message,
       user:user._id
    });
   
}; 