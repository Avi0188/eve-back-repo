const express = require("express")
const mongoose= require("mongoose")
const userController=require('../controllers/userController')
const postController=require('../controllers/postController')
const auth= require("../middlewares/auth")
const router= express.Router()

router.post('/users.register',userController.register)
router.login('/users.register',userController.login)


router.use(auth)

router.post("/posts",postController.createPost)
router.get("/posts",postController.get)
router.delete("/posts",postController.deletePost)





module.exports=router