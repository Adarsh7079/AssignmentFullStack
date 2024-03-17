import mongoose from "mongoose";
import express from "express";
import {config} from "dotenv";
import {connectDB} from "./data/database.js";
import cookieParser from 'cookie-parser';
import cors from "cors"
 
import userRouter from "./routes/user.js";
import adminRouter from "./routes/Admin.js";
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
app.use("/service/v1/admin",adminRouter);
app.use(errorMiddleware)

app.get("/",(req,res)=>{
    res.send("hello dear");
})
const port =process.env.PORT;
 app .listen(port,()=>{
    console.log(`app is runbning ${port}`)
});


