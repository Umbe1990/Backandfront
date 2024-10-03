import { Schema, model } from "mongoose"

const blogSchema = new Schema(
    {
        category: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        cover: {
            type: String,
        },
        readTime: {
            value: {
                type: Number,
            },
            unit: {
                type: String
            }

        },
        author: {
            type: String,
        },
        content: {
            type: String,
            required: true,
        },
    },
        
    {
        collection: "blogs"
    }

)
const Blog = model('Blog', blogSchema);
export default Blog;