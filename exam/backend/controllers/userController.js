// const express= require("express")
const asyncHandler = require('express-async-handler')
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken")
const User = require('../models/userModel');
const { default: mongoose } = require('mongoose');
require('dotenv').config()


const userController= {
    register:asyncHandler(async(req,res)=>{
        const {name,email,password}= req.body
        if (!name || !email || !password) {
            throw new Error("Name ,Email ,Password are required");
            
        }
        const hashedPassword= bcrypt.hash(password,12)

        const userRegister= mongoose.model.User.create(
            {
                name,
                email,
                password:hashedPassword
            }
        )
        if (!userRegister) {
            throw new Error("User is not registered");
            
        }
        const payload= {
            userid: userRegister._id,
            name:name,
            password:password
        }
        const token=jwt.sign(payload,process.env.JWT_SECRET_KEY)
        res.cookie("token",token,{maxAge:3*24*60*60*1000,
            httpOnly:true,
            sameSite:'none',
            secure:"none"
        })
        
       
            
        

        
    })
}
module.exports=userController