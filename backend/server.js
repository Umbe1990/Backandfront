import express from 'express';
import 'dotenv/config';
import mongoose from "mongoose";
import authorRoutes from "./routes/authorRoutes.js"
import cors from "cors"
import blogRoutes from "./routes/blogRoutes.js"



const port=process.env.PORT || 5001
const server = express()
server.use(cors())
server.use(express.json())   //significa che mandaremo json
server.use('/authors',authorRoutes)
server.use("/blogs",blogRoutes)

await mongoose.connect(process.env.MONGODB_CONNECTION)
.then(()=>{console.log('connessione ok')})
.catch((err)=> console.log(err))



server.listen(port, ()=>{
    console.log('server ok')
})

