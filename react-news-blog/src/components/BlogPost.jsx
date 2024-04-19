import React from "react";
import LikeCount from "../layouts/MainPage/LikeCount";
import AuthorTag from "./AuthorTag";

const BlogPost = ({postData}) => {
	console.log(postData)
	return (
		<div className="blog-Post">	
			<h3 className="blog-Post-Title">{postData ? postData.title : "Loading"}</h3>
			<p className="blog-Post-Content">{postData ? postData.content : "Loading"}</p>
            <AuthorTag author={postData ? postData.author : "Loading"}/>
			<LikeCount likeCount={postData ? postData.likes : "Loading"}/>
            <p>Date: {postData && new Date(postData.date).toDateString()}</p>
		</div>
	);

};

export default BlogPost;
