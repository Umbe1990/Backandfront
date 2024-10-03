import express from 'express';
import 'dotenv/config';
import mongoose from "mongoose";
import authorRoutes from "./routes/authorRoutes.js"
import authRoutes from './routes/authRouts.js'
import cors from "cors"
import blogRoutes from "./routes/blogRoutes.js"
import morgan from "morgan" // serve per vedere i log sul terminale
import helmet from 'helmet'
import passport from 'passport';
import googleStrategy from './config/passport.config.js';


const port=process.env.PORT || 5003
const server = express()

passport.use('google',googleStrategy)  //strategia di passporte

server.use(morgan('dev'))
server.use(helmet()) //nasconde informazioni
server.use(express.json()) 
server.use(cors())
  //significa che mandaremo json
server.use("/authors",authorRoutes)
server.use("/blogs",blogRoutes)
server.use('/auth',authRoutes)

await mongoose.connect(process.env.MONGODB_CONNECTION)
.then(()=>{console.log('connessione ok')})
.catch((err)=> console.log(err))



server.listen(port, ()=>{
    console.log('server ok')
})

