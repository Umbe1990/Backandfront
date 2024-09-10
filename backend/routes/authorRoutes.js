import express from 'express'

const router=express.Router()
router.get('/', (req,res)=>{   //prende id
    const authors=
    
    res.send()
})

router.get('/:id', (req,res)=>{   //prende id
    const {id}= req.params
    res.send(`‹ttttttt ${id}`)
})

router.post('/', (req,res)=>{
    const authors=req.body
    res.send( authors)
})
router.delete('/:id', (req,res)=>{
    const {id}= req.params
    res.send('ciao sono una delete')
})
router.put('/:id', (req,res)=>{
    const {id}= req.params
    res.send('ciao sono una put')
})


export default router