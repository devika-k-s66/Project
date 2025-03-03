const express= require("express")
const userController = require("../controllers/UserController")
const isAuth = require("../middleware/isAuth")
const userRouter= express.Router()
userRouter.post("/register",isAuth,userController.register)


module.exports=userRouter