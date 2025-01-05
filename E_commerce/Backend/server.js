import express from "express"
import dotenv from "dotenv"
import connectDb from "./src/lib/db.js"

const app = express()

dotenv.config()

connectDb()
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`🛞  Server is running at port:${process.env.PORT}`)
    })
})
.catch((error)=>{
    console.error(`�� Error connecting to database: ${error.message}`)
    process.exit(1)
})
