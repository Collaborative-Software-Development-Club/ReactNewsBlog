import React from "react";
import PostWriter from "./PostWriter.jsx";
import PostPreview from "./PostPreview.jsx";

import useUserData from "../../data/useUserData.js"

//why do we have an index.jsx file and an index.js file??
const MainPage = ({posts, uploadPost}) => {
    const user = useUserData();
	console.log("main page", posts);

	return (
		<>
			<h1>CSDC Blog</h1>
			<div className="main-page-content">
				<div>
					<h2>Feed</h2>
					<ul className="blog-Post-Stream">
				{posts.map((post) => (
					<li><a href={`./post/${post.id}`}><PostPreview postData={post} key={post.id} /></a></li>
				
				))}
			</ul>
				</div>
				<PostWriter uploadPost={uploadPost} user={user} />
			</div>
		</>
	);
};

export default MainPage;
