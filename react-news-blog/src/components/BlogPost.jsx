import React from "react";
import LikeCount from "../layouts/MainPage/LikeCount";
import AuthorTag from "./AuthorTag";

const BlogPost = ({postData}) => {
	console.log(postData)
	return (
		/*className changed from blog-Post to main-page-posts to show
		how the main page list of posts could be represented...*/
		<div className="blog-Post">
			
			<h3 className="blog-Post-Title">{postData.title}</h3>
			<p className="blog-Post-Content">{postData.content}</p>
            <AuthorTag author={postData.author}/>
			<LikeCount likeCount={postData.likes}/>
            <p>Date: {new Date(postData.date).toDateString()}</p>
		</div>
	);

};

export default BlogPost;
