
import mongoose from 'mongoose';

const schema =new mongoose.Schema({
    CategoryName:{
    type:String,
    required:true
   },
   Description:{
     type:String,
     
   },
 
    Status:{
      type:String,
      required:true
    }
});



export const Category=mongoose.model("category",schema);