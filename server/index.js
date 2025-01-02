import express from "express"
import { config } from "dotenv"
import cookieParser from "cookie-parser"
import connectDB from "./database/db.js"
import cors from "cors"
config()
const app=express()
const PORT=process.env.PORT
app.use(express.json())
app.use(cookieParser())



//cors
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true                         
  }))


app.listen(PORT,()=>{
    console.log(`Server is running in port:${PORT}`)
    connectDB()
})
