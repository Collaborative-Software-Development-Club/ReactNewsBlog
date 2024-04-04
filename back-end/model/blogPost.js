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
});

const BlogPost = model("BlogPost", blogPostSchema);
export default BlogPost;