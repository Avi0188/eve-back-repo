const express= require("express")
const connectDB= require("./db")
const routes= require("./routes")
const app= express()
app.use(express.json())
connectDB()
app.use("/",routes)

app.listen(process.env.PORT,()=>{
    console.log("server")
})