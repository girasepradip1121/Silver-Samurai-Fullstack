const express=require("express")
const router=express.Router();
const blogController=require('../Controllers/blogController')
const upload=require('../Middlewares/uploadMiddleware')
const authMiddleware=require('../Middlewares/authMiddleware');

router.post('/create',upload.single("image"),authMiddleware,blogController.createBlog)
router.get('/getall',blogController.getAllBlogs)
router.get('/getbyid/:blogId',blogController.getBlogById)
router.put('/update/:blogId',authMiddleware,upload.single("image"),blogController.updateBlog)
router.delete('/delete/:blogId',authMiddleware,blogController.deleteBlog)
router.get('/getlatest',blogController.getLatestBlog)

module.exports=router;