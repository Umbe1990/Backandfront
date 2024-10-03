import express from "express";
import Blog from "../models/Blogs.js";
//import transport from "../services/mailService.js";
import * as commentController from '../controllers/comment.controller.js';
/* import authorization from "../middleware/authorization.js";
 */

const blogRoutes = express.Router()
/* blogRoutes.use(authorization) */;
blogRoutes.get("/", async (req,res)=>{
    const blogs= await Blog.find()
    res.send(blogs)
    
})

blogRoutes.get("/:blogId", async (req,res)=>{
    //const id= req.params.blogId
    //const blog= await Blog.findById(id)
    //res.send(blog)
    try {const id= req.params.blogId
        const blog= await Blog.findById(id)
        res.send(blog)
        
    } catch (error) {
        console.log(error);
        res.status(400).send({ message: 'qualcosa non va' });
    }
    
})


blogRoutes.post('/', async (req, res) => {
    // chiedere al database di creare il nuovo utente
    try {
        const userData = req.body;
        const newUser = new Blog(userData);

        const createdUser = await newUser.save();
        //trasport per mandare la mail
        /* await transport.sendMail({
            from: 'noreplay@gmail.com', // sender address
            to: 'ciao@gmai.com', // list of receivers
            subject: "Hello ✔", // Subject line
            text: "sono il piu bello?", // plain text body
            html: "<b>sono il piu bello?</b>", // html body
         }) */
        res.status(201).send(createdUser);
    } catch (error) {
        console.log(error);
        res.status(400).send({ message: 'qualcosa non va' });
    }
});

blogRoutes.put('/:blogid', async(req,res)=>{
    const id=req.params.blogid
    const userblog=req.body;

    const blog= await Blog.findByIdAndUpdate(id,userblog,{new:true})
    res.send(blog)
})

blogRoutes.delete('/:blogid', async(req,res)=>{
    try {
        const id = req.params.blogid;
        await Blog.findByIdAndDelete(id);
        res.send({ message: 'utente eliminato' });
    } catch (err) {
        console.log(err);
        res.status(500).send();
    }


})

// POST NUVO COMMENTO

blogRoutes.post('/:blogId/comments', commentController.createComment);

blogRoutes.get('/:blogId/comments', commentController.readAll);

blogRoutes.get('/:blogId/comments/:commentId', commentController.getSingleComment);

blogRoutes.delete('/:blogId/comments/:commentId', commentController.deleteComment);

blogRoutes.put('/:blogId/comments/:commentId', commentController.editComment);


export default blogRoutes