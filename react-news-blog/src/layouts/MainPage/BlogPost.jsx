import React from "react";

const BlogPost = ({ postData }) => {
	return (
		<div className="blog-Post">
			<h3 className="blog-Post-Title">{postData.title}</h3>
			<p className="blog-Post-Content">{postData.content}</p>
			<button className="like-Button"> Like </button>
		</div>
	);
};

export default BlogPost;
