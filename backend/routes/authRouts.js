import express from 'express'
import * as authController from '../controllers/authentication.controller.js'
import authorization from '../middleware/authorization.js'
import passport from 'passport'


const authRoutes=express.Router()

authRoutes.post('/register',authController.register)

 authRoutes.post('/login',authController.login)
 
 //authRoutes.post('/logout',logout) non si usa nel back end

 authRoutes.get('/me', authorization, authController.me);

 authRoutes.get('/login-google',passport.authenticate('google',{scope:['profile','email']})); //ci ridezione su google
 authRoutes.get('/callback-google',passport.authenticate('google',{session:false}), authController.callbackGoogle);


export default authRoutes