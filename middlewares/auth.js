const jwt= require('jsonwebtoken')
const User = require('..models/user' )

module.exports=async (req,res,next)=>{
    try {
        const token = req.headers.authorization.split(' ')[1]

        const dcod=jwt.verify(token,process.env.MOGO)
        const user = await User.findByID(dcod.userId)
if(!user){
    return res.send({msg:"unauthorized token"})
}
        req.user=user
        next()
    } catch (error) {
        res.send({msg:"unathorized token"})
    }
}