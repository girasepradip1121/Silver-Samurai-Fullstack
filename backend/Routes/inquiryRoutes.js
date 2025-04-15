const express=require('express')
const router=express.Router()
const inquiryController=require('../Controllers/inquiryController')
const authMiddleware=require('../Middlewares/authMiddleware');


router.post('/create',inquiryController.createInquiry)
router.get('/getall',authMiddleware,inquiryController.getInquiry)
router.delete('/remove/:inquiryId',authMiddleware,inquiryController.deleteInquiry)
                                          
module.exports=router;
