import { Schema, Types, model } from "mongoose"

const blogSchema = new Schema(
    {
        category: "string",
        title: "string",
        cover: "string",
    
        author: "string",
        content: "string",
    },{
        collection: "blogs"
    }

)
export default model("Blogs",blogSchema)