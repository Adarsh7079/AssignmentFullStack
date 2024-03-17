
import mongoose from 'mongoose';

const schema =new mongoose.Schema({
   id:{
    type:Number,
    default:123
   },
   name:{
     type:String,
     
   },
   packsize:{
     type:String,
     require:true
   },
    category:{
        type:String,
        required:true
      
    },
    mrp:{
      type:Number,
      required:true
    },
    ProductImage:{
     type: String,

    },
    status:{
      type:String,
      required:true
    }
});



export const Product=mongoose.model("product",schema);