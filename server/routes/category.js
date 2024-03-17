import express from "express"
import {addcategory,deletecategory,updatcategory,getall} 
from "../controllers/Items/category.js"
import {isAuthenticated} from "../middlewares/auth.js"


const router=express.Router();

router.post("/new",addcategory);
router.get("/all",isAuthenticated,getall);
router.delete("/delete/:id",isAuthenticated,deletecategory);
router.patch("/update/:id",isAuthenticated,updatcategory);

export default router; 