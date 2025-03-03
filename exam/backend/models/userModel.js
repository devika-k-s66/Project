const{default:mongoose}=require("mongoose")


const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is Required"],
        trim:true
    },
    email:{
        type:String,
        required:[true,"Email is Required"],
        trim:true,
        unique:true
    },
    password:{
        type:String,
        required:[true,"Password is Required"],
        trim:true,
        minlength:[6,"Password must be 6 length"]
    },
    role:{
        type:String,
        enum:["user","admin"],
        default:"user"
    }
    

})
const User= mongoose.model("User",userSchema)
    module.exports=User