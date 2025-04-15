const express=require('express');
const router=express.Router();
const serviceController=require("../Controllers/serviceController");
const upload=require('../Middlewares/uploadMiddleware');
const authMiddleware=require('../Middlewares/authMiddleware');


router.post('/create',authMiddleware,upload.single("image"),serviceController.createService)
router.get('/getall',serviceController.getServices)
router.get('/getbyid/:productId',serviceController.getServiceById)
router.put('/update/:productId',authMiddleware,upload.single("image"),serviceController.updateService)
router.delete('/delete/:productId',authMiddleware,serviceController.deleteService)

module.exports=router;