import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser";

const app= express()
app.use(cors({
    origin: 'http://localhost:5173', // Specify the allowed origin
    credentials: true, // Allow credentials (cookies)
}));
app.use(express.json({limit:'16kb'}))
app.use(express.urlencoded({extended:true, limit:"16kb"}))

//access configuration for public folder
app.use(express.static("public"))
app.use(cookieParser())  


//routes import 
import userRouter from "./routes/user.routes.js"
import productRouter from "./routes/product.routes.js"
import categoryRouter from "./routes/category.routes.js"

//routes declaration 
app.use("/api/v1/users",userRouter)
app.use("/api/v1/product",productRouter)
app.use("/api/v1/category",categoryRouter)

export {app} 