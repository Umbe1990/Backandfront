import express from 'express';
import 'dotenv/config';
import mongoose from "mongoose";
import authorRoutes from "./routes/authorRoutes.js"
import cors from "cors"
import blogRoutes from "./routes/blogRoutes.js"
import morgan from "morgan" // serve per vedere i log sul terminale
import helmet from 'helmet'


const port=process.env.PORT || 5003
const server = express()

server.use(morgan('dev'))
server.use(helmet()) //nasconde informazioni
server.use(express.json()) 
server.use(cors())
  //significa che mandaremo json
server.use("/authors",authorRoutes)
server.use("/blogs",blogRoutes)

await mongoose.connect(process.env.MONGODB_CONNECTION)
.then(()=>{console.log('connessione ok')})
.catch((err)=> console.log(err))



server.listen(port, ()=>{
    console.log('server ok')
})

