import {Admin} from "../../models/Auth/Admin.js"
import {Product} from "../../models/item/product.js"
import bcrypt from "bcrypt"
import {sendCookie} from "../../utils/features.js"
import ErrorHandler from "../../middlewares/error.js";
import multer from "multer"


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
  });



// *********************** Register API **********************
export const addproduct=async(req,res,next)=>{
    try{
        const {name,packsize,category,mrp,ProductImage,status}=req.body;
        const resp=new Product({name,packsize,category,mrp,ProductImage,status});
        await resp.save();
        res.status(201).json({
                message:"Item Added",
            });
    }
    catch(error){
        next(error);
    }
};


//delete user 
export const deleteproduct=async(req,res,next)=>{
    try{
        const id=req.params.id;
        const respo=await Product.deleteOne({_id:id});
        res.json({
            success:true,
            
        });
    }catch(error)
    {
        next(error)
    }
}

//update user 
export const updatproduct=async(req,res)=>{
   
    try{
        const id=req.params.id;
        const updateUserData=req.body;
       
        const updateData=await Product.updateOne({_id:id},
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
        const data=await Product.find({});
        res.status(200).json({
                data,
            })

    }
    catch(error)
    {
        console.log("error",error)
    }
}