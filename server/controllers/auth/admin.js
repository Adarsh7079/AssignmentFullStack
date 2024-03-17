import {Admin} from "../../models/Auth/Admin.js"
import bcrypt from "bcrypt"
import {sendCookie} from "../../utils/features.js"
import ErrorHandler from "../../middlewares/error.js";



// *********************** Register API **********************
export const register=async(req,res,next)=>{
    try{
        const {Full_Name,Mobile_Number, User_Type,Password}=req.body;
        //find user exist or not 
        let user=await Admin.findOne({Mobile_Number});
       
        //if user exist 
        if(user)
        {
            return next(new ErrorHandler("user already register",401));

        }
        else
        {
            // const hashedPassword =await bcrypt.hash(Password,10);
            // user= await Admin.create({Full_Name, Mobile_Number, User_Type,  Password:hashedPassword});
            // // sendCookie(user ,res,"Register Successfully",201);
            // res.status(201).json({
            //     success:true,
            //     message:"user register",
            // });
        }
        const resp=new Admin({Full_Name, Mobile_Number, User_Type,Password});
        await resp.save();
        res.status(201).json({
                message:"user register",
            });
    }
    catch(error){
        // res.status(401).json({
        //     message:"something wrong",
        //     success:false,
        //     user:req.user,
        // })
        // console.log(error)fi
        next(error);
    }
};

// ************ LOGIN API ****************
export const login=async(req,res,next)=>{
    let token
    try{
        const {Mobile_Number,Password}=req.body;
        if(!Mobile_Number || !Password)
        {
            return res.status(400).json({error:"Please fill the data "})
        }
        const user =await Admin.findOne({Mobile_Number});
        
        if(!user)  {
            return res.status(400).json({error:"bad request "})

        }
        else
        {
            const isMatch = await bcrypt.compare(Password,user.Password);

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
     return   res.status(401).json({
            message:"wrong crediential",
            success:false,
            user:req.user,
        })
        console.log(error)
       // next(error);
    }
};
// *******  Get LogOut API  ***** */

export const logout=(req,res)=>{
    res.clearCookie('jwtoken',{path:"/"});
    res.status(200).send('User logout');
};

export  const getMyProfile=(req,res,next)=>{
    res.send(req.rootuser)
};
export const getall=async(req,res,next)=>{
    try {
        const users =await Admin.find({});
    
        const keyword =req.query.keyword;
        console.log(keyword);
    
        res.json({
            success:true,
            user:users,
        });
       } catch (error) {
        next(error);
       }
}

//delete user 
export const deleteuser=async(req,res,next)=>{
    try{
        const id=req.params.id;
        const respo=await Admin.deleteOne({_id:id});
        res.json({
            success:true,
            
        });
    }catch(error)
    {
        next(error)
    }
}

//update user 
export const updateuser=async(req,res)=>{
    console.log("run gere ")
    try{
        const id=req.params.id;
        const updateUserData=req.body;
       
        const updateData=await Admin.updateOne({_id:id},
            {
                $set:updateUserData
            })
            res.status(200).json(updateData)
    }
    catch(error)
    {
        next(error)
    }
}