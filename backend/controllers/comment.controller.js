import Comment from "../models/commentSchema.js";


//post   /:blogId"/comment

export const createComment= async (req,res) =>{
    const blogId= req.params.blogId
    const commentInfo=req.body
    const newComment = new Comment({ ...commentInfo, blog: blogId });
    const createdComment = await newComment.save();

    return res.send({
        data: createdComment,
    });

}


export const readAll = async (req, res) => {
    const comments = await Comment.find({
        blog : req.params.blogId
        }).populate('blog',{title:1, _id:0})
   
    return res.send({
        data: comments,
        
    });
}


export const getSingleComment = async (req,res)=>{
   /*  try {
        const singleComment = await Comment.findOne({blog: req.params.blogId, _id: req.params.commentId})
        return res.status(200).send(singleComment) 
    } catch (error) {console.log(error)
       return res.status(404).send({message: 'Not Found'}) 
    }  */
       try {
        //verifico che il commento esista
        const comment = await Comment.exists({_id:req.params.commentId})
        if(comment){
            //elimino il commento
            const singleComment = await Comment.findOne({blog: req.params.blogId, _id: req.params.commentId})
            //invio risposta di successo
            return res.status(200).send(singleComment)
        }else {
            //se il commento non esiste, resituisce errore 404
            return res.status(404).send({message: 'Comment not found'})}
    } catch (error) {
        res.status(400).send(error)
    }
    }


export const deleteComment = async(req,res) =>{
    try {
        //verifico che il commento esista
        const comment = await Comment.exists({_id:req.params.commentId})
        if(comment){
            //elimino il commento
            const singleComment = await Comment.findOneAndDelete(
                {blog: req.params.blogId, _id: req.params.commentId}
            )
            //invio risposta di successo
            return res.status(200).send(`ho eliminato il commento con id: ${req.params.commentId}`)
        }else {
            //se il commento non esiste, resituisce errore 404
            return res.status(404).send({message: 'Comment not found'})}
    } catch (error) {
        res.status(400).send(error)
    }
}

export const editComment = async (req,res) =>{
    try {
        //verifico che il commento esista
        const comment = await Comment.exists({_id:req.params.commentId})
        if(comment){
        
            const singleComment = await Comment.findOneAndUpdate(
                {blog: req.params.blogId, _id: req.params.commentId},
                {$set: req.body},
                {new: true}
                
            )
        return res.status(200).send(singleComment)
        }else {return res.status(404).send({message: 'Comment not found'})}     
    } catch (error) {
        res.status(400).send(error)
    }
}