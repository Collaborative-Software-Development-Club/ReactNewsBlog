import mongoose from "mongoose";

const { Schema, model } = mongoose;

const blogPostSchema = new Schema({
	title: String,
	date: Boolean,
	author: String,
	content: String,
});

const BlogPost = model("BlogPost", blogPostSchema);
export default BlogPost;