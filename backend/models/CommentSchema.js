import { Schema,model } from "mongoose";

const commentsSchema= new Schema(
    {
        content: {
            type: String,
            minLength: 2,
            maxLength: 100,
            required: true,
            trim: true,
        },
        blog: {
            type: Schema.Types.ObjectId,
            ref: 'Blog',
        },
        
    },
    {collection: "comments",
        timestamps: true,
    }
);

const Comment = model('Comment', commentsSchema);
export default Comment;