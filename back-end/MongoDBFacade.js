import mongoose from "mongoose";
import BlogPost from "./model/blogPost.js";

/**
 * @typedef {Object} Comment
 * @property {string} author
 * @property {string} content
 * @property {Date} date
 * 
 * @typedef {Object} BlogPost
 * @property {string} title
 * @property {string} author
 * @property {string} content
 * @property {Date} date
 * @property {string[]} likedBy
 * @property {string} _id
 * @property {Comment[]} comments
 */
class MongoDBFacade {
	/**
	 * @constructor
	 * @param {string} username
	 * @param {string} password
	 */
	constructor(username, password) {
		mongoose.connect(
			`mongodb+srv://${username}:${password}@reactnewsblog.pku64lm.mongodb.net/?retryWrites=true&w=majority&appName=ReactNewsBlog`
		);
	}
	/**
	 * Gets all blog posts
	 * @returns {BlogPost[]}
	 */
	async getAllPosts() {
		return BlogPost.find();
	}
	/**
	 * Gets a single post based on its id
	 * @param {string} id
	 * @returns {BlogPost}
	 */
	async getSinglePost(id) {
		return BlogPost.findById(id);
	}
    /**
     * 
     * @param {string} id 
     * @param {string} username 
     */
	async updateLike(id, username) {
		const postToLike = await BlogPost.findById(id);
		const likedBy = postToLike.likedBy;
		if (likedBy.includes(username)) {
			postToLike.likedBy = likedBy.filter(name => name !== username);
		} else {
			postToLike.likedBy.push(username);
		}
		postToLike.save();
	}
    
    /**
     * 
     * @param {string} id
     * @param {string} author 
     * @param {string} content 
     */
	async addComment(id, author, content) {
		const post = await this.getSinglePost(id);
		post.comments.push({
			content: content,
			author: author,
			date: new Date(),
		});
		post.save();
	}
    /**
     * 
     * @param {string} author 
     * @param {string} title 
     * @param {string} content 
     * @returns {BlogPost}
     */
	async uploadPost(author, title, content) {
		const newPost = new BlogPost({
			author: author,
			title: title,
			content: content,
			date: new Date(),
		});
		const insertedPost = await newPost.save();
		return insertedPost;
	}
    /**
     * 
     * @param {string} id 
     * @param {string} username 
     * @param {string} content 
     */
	async updateCommentLike(id, username, content) {
		const post = await BlogPost.findById(id);
		const comment = post.comments.filter(
			comment => comment.content == content
		)[0];
		const likedBy = comment.likedBy;
		if (likedBy.includes(username)) {
			comment.likedBy = likedBy.filter(name => name !== username);
		} else {
			comment.likedBy.push(username);
		}
		post.save();
	}
    async getPostsFromAuthor(author) {
        const posts = BlogPost.find({
            author: author
        });
        return posts
    }
}

export default MongoDBFacade;
