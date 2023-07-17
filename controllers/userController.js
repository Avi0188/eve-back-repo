
const User= require('..models/user')
const jwt = require("jsonwebtoken")

exports.register=  async (req,res,next)=>{
    try {
        const {name,email,gender,password}=req.body
        const user= new User({name,email,gender,password})
        await user.save()
        res.status(201).send({msg:"user registered successfully"})
    } catch (error) {
        next(error)
    }
}


exports.login=  async (req,res,next)=>{
    try {
        const {email,password}=req.body
        const user=await User.findOne({email})
        if(!user){
            return res.status(401).json({msg:"Invalid email"})
        }
      const isMatch= await user.comparePassword(password)
      if(!isMatch){
        return res.status(401).json({msg:"Invalid password"})
    }
    const token = jwt.sign({userId:user._id},process.env.MONGO)
    res.send({token})
    } catch (error) {
        next(error)
    }
}