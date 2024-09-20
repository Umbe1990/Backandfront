import { Schema, model } from "mongoose"

const authorSchema = new Schema (
    {
        name:{ 
            type:String,
            require: true,
        },
        surname:{ 
            type:String,
            require: true,
        },
        email:{ 
            type:String,
            require: true,
            unique:true,
        },
        birthDay:{
            type:String
        },
        avatar: String
    },
 {collection: 'authors'}

)       
export default model('Authors',authorSchema)
