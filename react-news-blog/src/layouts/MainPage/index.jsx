import React from "react";
import CreatePost from "./PostCreation.jsx";
import BlogPost from "./BlogPost.jsx";

import useData from "../../data/useData.js";

//why do we have an index.jsx file and an index.js file??
const MainPage = () => {
	const [posts, uploadPost] = useData();
	console.log("main page", posts);

	return (
		<>
			<h1>CSDC Blog</h1>
			<h2>Write a post</h2>
			<CreatePost uploadPost={uploadPost} />
			<h2>Feed</h2>
			<div className="blog-Post-Stream">
                {posts.map(post => (
                    <BlogPost postData={post} />
                ))}
			</div>
		</>
	);
};

export default MainPage;
