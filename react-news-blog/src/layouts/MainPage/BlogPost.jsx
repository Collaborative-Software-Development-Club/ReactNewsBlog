import React from "react";

const BlogPost = ({ postData }) => {
	return (
		<div>
			<h3>{postData.title}</h3>
			<p>{postData.content}</p>
			<p>Author: {postData.author}</p>
		</div>
	);
};

export default BlogPost;
