const mongoose =require("mongoose")
const connectDb=async()=>{
    try {
        await mongoose.connect(process.env.MONGO)
        console.log("conneted to mongo")
    } catch (error) {
        console.log(error)
    }
}

module.exports.connectDB