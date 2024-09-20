import express from 'express'
import AuthorR from '../models/authorSchema.js'
import uploadCloudinary from '../middleware/uploadCloudinary.js'

const router=express.Router()
/* router.get('/', (req,res)=>{   //prende id
    const authors=
    
    res.send()
})

router.get('/:id', (req,res)=>{   //prende id
    const {id}= req.params
    res.send(`‹ttttttt ${id}`)
})
 */
//router.post('/', (req,res)=>{
    //const authors=req.body
    //res.send( authors)
//})
/* outer.delete('/:id', (req,res)=>{
    const {id}= req.params
    res.send('ciao sono una delete')
})
router.put('/:id', (req,res)=>{
    const {id}= req.params
    res.send('ciao sono una put')
}) */
 

//rotta per aggiungere immagineeeeeeeeee




router.post('/', async (req, res) => {
    
    // chiedere al database di creare il nuovo utente
    try {
        const userData = req.body;
        const newUser = new AuthorR(userData);

        const createdUser = await newUser.save();
        res.status(201).send(createdUser);
        console.log(createdUser)
    } catch (error) {
        console.log(error);
        res.status(400).send({ message: 'qualcosa non va' });
    }
});

router.patch('/:authorId/avatar',uploadCloudinary.single('avatar'),async (req,res)=>{
    const {authorId}= req.params
    try{
        const author= await AuthorR.findByIdAndUpdate(authorId,{avatar: req.file.path})
        await author.save()
        res.send(author)
    } catch{
        
    }
})


 


router.get("/", async (req,res)=>{
    const author= await AuthorR.find()
    //console.log('ciao')
    res.send(author)
    
})










export default router