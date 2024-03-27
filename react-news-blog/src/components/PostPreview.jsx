import React from "react";
import AuthorTag from "./AuthorTag";

/*
BlogPostMain used to post all posts on the main page, I think here we should
only be showing the title and the first sentence or two of each post...*/
const BlogPostMain = ({postData}) => {
	console.log(postData)
	
	const contentSummary = postData.content.substring(0, 30);
	return (
		/*className changed from blog-Post to main-page-posts to show
		how the main page list of posts could be represented...*/
		<div className="post-preview">
			<h3 >{postData.title}</h3>
			<p>{contentSummary}...</p>
            <AuthorTag author={postData.author}/>
		</div>
	);

};

export default BlogPostMain;
