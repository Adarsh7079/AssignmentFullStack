import express from "express"
import { addproduct ,deleteproduct,getall,updatproduct} 
from "../controllers/Items/product.js"

import multer from "multer"
import {isAuthenticated} from "../middlewares/auth.js";

const router=express.Router();


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
  });
  const upload = multer({ storage: storage });

router.post("/new",upload.single('image'),addproduct);
router.get("/all",isAuthenticated,getall);
router.delete("/delete/:id",isAuthenticated,deleteproduct);
router.patch("/update/:id",isAuthenticated,updatproduct);

export default router; 