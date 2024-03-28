import { Router } from "express";
import express from "express"
import {register,login,logout} from "../controllers/user.controller.js";
import {upload} from "../middlewares/multer.middleware.js"
const router=express.Router();

router.post("/new",register);
router.post("/login",login);
router.post("/logout",logout);


export default router;