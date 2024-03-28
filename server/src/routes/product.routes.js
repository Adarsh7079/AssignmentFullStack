import { Router } from "express";
import {upload} from "../middlewares/multer.middleware.js";
import {addProduct, getall,deleteproduct,updatproduct} from "../controllers/product.controller.js"
import {isAuthenticated} from "../middlewares/auth.js"
import { deleteModel } from "mongoose";

const router=Router()
router.route("/add").post(
    upload.fields([
        {
            name: "ProductImage",
            maxCount: 1
        }
    ]),
    addProduct
    )
 
    router.get("/all",getall);
    router.delete("/delete/:id",deleteproduct);
    router.patch("/update/:id",updatproduct);


export default router