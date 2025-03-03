const express= require("express")
const router = require("./router")

const connectdb = require("./db/connectdb")
require('dotenv').config()

 const app =express()

 app.use(express.json())
 connectdb().catch((err)=>{
    throw new Error(err);
    
 });

 app.use("/api/vi",router)

 

 app.listen(5000,()=>{
    console.log("Server Running");
    
})