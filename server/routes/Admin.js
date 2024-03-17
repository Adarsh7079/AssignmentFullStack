import express from "express"
import {
    register,
    login,
    logout,getMyProfile,getall,deleteuser, updateuser
} from "../controllers/auth/admin.js";
import {isAuthenticatedadmin} from "../middlewares/auth.js";

const router=express.Router();

router.get("/all",getall);
router.post("/new",register);
router.post("/login",login);
router.post("/logout",logout);
router.get("/me",isAuthenticatedadmin,getMyProfile);
router.delete("/delete/:id",deleteuser);
router.patch("/update/:id",updateuser);

export default router; 