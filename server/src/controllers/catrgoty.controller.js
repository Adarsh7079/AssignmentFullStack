
import {Category} from "../models/category.models.js"


// *********************** Register API **********************
export const addcategory=async(req,res,next)=>{
    try{
        const {CategoryName,Description,Status}=req.body;
        const resp=new Category({CategoryName,Description,Status});
        await resp.save();
        res.status(201).json({
                message:"category added Added",
            });
    }
    catch(error){
        next(error);
    }
};


//delete user 
export const deletecategory=async(req,res,next)=>{
    try{
        const id=req.params.id;
        const respo=await Category.deleteOne({_id:id});
        res.json({
            success:true,
            
        });
    }catch(error)
    {
        next(error)
    }
}

//update user 
export const updatcategory=async(req,res)=>{
   
    try{
        const id=req.params.id;
        const updateUserData=req.body;
       
        const updateData=await Category.updateOne({_id:id},
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

//get all   
export const getall=async(req,res)=>{
    try
    {
        const data=await Category.find({});
        res.status(200).json({
                data,
            })

    }
    catch(error)
    {
        console.log("error",error)
    }
}