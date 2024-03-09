import React from "react";
import CreatePost from "./PostCreation.jsx";
import BlogPost from "../../components/BlogPost.jsx";

import useData from "../../data/useData.js";
import useUserData from "../../data/useUserData.js"

//why do we have an index.jsx file and an index.js file??
const MainPage = () => {
	const { posts, uploadPost } = useData();
    const user = useUserData();
	console.log("main page", posts);

	return (
		<>
			<h1>CSDC Blog</h1>
			<h2>Write a post</h2>
			<CreatePost uploadPost={uploadPost} user={user}/>
			<h2>Feed</h2>
			<div className="blog-Post-Stream">
				{posts.map((post) => (
					<BlogPost postData={post} key={post.id} />
					
				))}
			</div>
		</>
	);
};

export default MainPage;
