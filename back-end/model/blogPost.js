import mongoose from "mongoose";

const { Schema, model } = mongoose;

const blogPostSchema = new Schema({
	title: {
        type: String,
        required: true
    },
	author: {
        type: String,
        required: true
    },
	content: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    likedBy:{
        type: [String],
        default: []
    },
    comments: {
        type: [{
            content: String,
            author: String,
            date: Date,
            likedBy: [String]
        }],
        default: []
    }
});

const BlogPost = model("BlogPost", blogPostSchema);
export default BlogPost;