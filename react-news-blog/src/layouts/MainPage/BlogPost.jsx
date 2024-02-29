import React from "react";

const BlogPost = ({ postData }) => {
	return (
		<div className="blog-Post">
			<h3 className="blog-Post-Title">{postData.title}</h3>
			<p className="blog-Post-Content">{postData.content}</p>
            <p>{postData.author}</p>
			<button className="like-Button"> Like </button>
			<p className="likes">{postData.likes}</p>
            <p>Date: {new Date(postData.date).toDateString()}</p>
		</div>
	);
};

export default BlogPost;
