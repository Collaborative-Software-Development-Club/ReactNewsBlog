import React from "react";
import CreatePost from "./PostCreation.jsx";
import BlogPostMain from "./BlogPostMain.jsx";

import useData from "../../data/useData.js";

//why do we have an index.jsx file and an index.js file??
const MainPage = () => {
	const { posts, uploadPost, user } = useData();
	console.log("main page", posts);

	return (
		<>
			<h1>CSDC Blog</h1>
			<h2>Write a post</h2>
			<CreatePost uploadPost={uploadPost} user={user}/>
			<h2>Feed</h2>
			<div className="blog-Post-Stream">
				{posts.map((post, index) => (
					/*BlogPostMain here to represent what
					we may want to show on the main page...*/
					<BlogPostMain postData={post} key={index} />
					
				))}
			
			</div>
		</>
	);
};

export default MainPage;
