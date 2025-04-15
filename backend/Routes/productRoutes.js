const express=require('express');
const router=express.Router();
const productController=require("../Controllers/productController");
const upload=require('../Middlewares/uploadMiddleware');
const authMiddleware=require('../Middlewares/authMiddleware');


router.post('/create',authMiddleware,upload.single("image"),productController.createProduct)
router.get('/getall',productController.getProducts)
router.get('/getbyid/:productId',productController.getProductById)
router.put('/update/:productId',authMiddleware,upload.single("image"),productController.updateProduct)
router.delete('/delete/:productId',authMiddleware,productController.deleteProduct)

module.exports=router;