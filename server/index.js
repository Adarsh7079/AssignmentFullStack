
import express from "express";
import {config} from "dotenv";
import {connectDB} from "./data/database.js";
import cookieParser from 'cookie-parser';
import cors from "cors"
 
import userRouter from "./routes/user.js";
import productRout from "./routes/product.js"
import categoryRout from "./routes/category.js"

import ErrorHandler, { errorMiddleware } from "./middlewares/error.js";


const app=express();

config({
    path:"./config.env"
});

connectDB()

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
      origin: [process.env.FRONTEND_URL],
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
    })
  );

//using routes
app.use("/product/v1/users",userRouter);
app.use("/product/v1/product",productRout);
app.use("/product/v1/category",categoryRout);

app.use(errorMiddleware)

app.get("/",(req,res)=>{
    res.send("hello dear");
})
const port =process.env.PORT;
 app .listen(port,()=>{
    console.log(`app is runbning ${port}`)
});


