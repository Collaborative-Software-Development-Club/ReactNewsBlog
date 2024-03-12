import React from "react";

/*
BlogPostMain used to post all posts on the main page, I think here we should
only be showing the title and the first sentence or two of each post...*/
const BlogPostMain = ({postData}) => {
	console.log(postData)
	
	const lineOfT = postData.content.substring(0, 30);
	return (
		/*className changed from blog-Post to main-page-posts to show
		how the main page list of posts could be represented...*/
		<div className="main-page-posts">
			<p>
			<h5 >{postData.title}</h5>
			<h6>{lineOfT}-<br></br>
            {postData.author}</h6>
			</p>
		</div>
	);

};

export default BlogPostMain;
