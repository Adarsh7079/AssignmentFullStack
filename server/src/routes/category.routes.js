import { Router } from "express";

import {addcategory,deletecategory,updatcategory,getall} from "../controllers/catrgoty.controller.js";


const router=Router()
router.post("/new",addcategory);
router.get("/all",getall);
router.delete("/delete/:id",deletecategory);
router.patch("/update/:id",updatcategory);

export default router; 