import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js"
import {Product} from "../models/product.models.js"
import { uploadOnCloudinary} from "../utils/cloudinary.js"
import {ApiResponse} from "../utils/ApiResponse.js"


export const addProduct= asyncHandler(async (req,res)=>{
    const {name, packsize, category, mrp, status}=req.body

    if([name, packsize, category, mrp, status].some((fields)=>fields?.trim()=="")){
        throw new ApiError(400,"All fields are required")
    }

    const avatarLocalPath=req.files?.ProductImage[0]?.path;
   // const coverImageLocalPath=req.files?.uplocoverImage[0]?.path;

   

    if(!avatarLocalPath){
        throw new ApiError(400,"image File is required ")
    }
    const ProductImage=await uploadOnCloudinary(avatarLocalPath)
  

  
   const user= await Product.create({
    name, packsize, category, mrp, status,
    ProductImage:ProductImage.url
    })

    //user and refrehseToken will not be selected
   const createdProduct=await Product.findById(user._id)
   
   if(!createdProduct)
   {
    throw new ApiError(500,"Something went wrong  while registring a user ")
   }

   return res.status(201).json(
    new ApiResponse(200,createdProduct,"Product addedre Successfully")
   )
    console.log("email: ",email)

    //uplaod on cloudinary
})

//delete user
export const deleteproduct = async (req, res, next) => {
    try {
      const id = req.params.id;
      const respo = await Product.deleteOne({ _id: id });
      res.json({
        success: true,
      });
    } catch (error) {
      next(error);
    }
  };
  
  //update user
  export const updatproduct = async (req, res) => {
    try {
      const id = req.params.id;
      const updateUserData = req.body;
  
      const updateData = await Product.updateOne(
        { _id: id },
        {
          $set: updateUserData,
        }
      );
      res.status(200).json(updateData);
    } catch (error) {
      next(error);
    }
  };
  
  //get all
  export const getall = async (req, res) => {
    try {
      const data = await Product.find({});
      res.status(200).json({
        data,
      });
    } catch (error) {
      console.log("error", error);
    }
  };
  

