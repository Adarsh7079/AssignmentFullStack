import express from "express"
import {
    register,
    login,
    logout,getMyProfile
} from "../controllers/auth/user.js";
// import {isAuthenticated} from "../middlewares/auth.js"
const router=express.Router();

router.post("/new",register);
router.post("/login",login);
router.post("/logout",logout);


export default router;