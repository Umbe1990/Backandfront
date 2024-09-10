import express from "express";
import Blog from "../models/Blogs.js";


const blogRoutes = express.Router()

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



export default blogRoutes