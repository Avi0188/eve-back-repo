const mongoose = require("mongoose")
const bcrypt =require("bcrypt")

const userSchema = new mongoose.Schema({
    name:{
    type:String,
    required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        },
        gender:{
            type:String,
            required:true,
            },
            password:{
                type:String,
                required:true,
                },
})

// userSchema.pre("save", async function(next){
//     try {
//         const salt= await bcrypt.genSalt(10)
//         const hashPassword= await bcrypt.hash(this.password,salt)
//         this.password= hashPassword
//         next()

//     } catch (error) {
//         next(error)
//     }
// })

// compare password
userSchema.method.comparePassword=async (password)=>{
    try {
        return await bcrypt.compare(password,this.password)

    } catch (error) {
        throw new Error(error)
    }
}

const User= mongoose("User",userSchema)
module.exports=User