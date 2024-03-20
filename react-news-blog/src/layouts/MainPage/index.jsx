import React from "react";
import PostWriter from "./PostWriter.jsx";
import PostPreview from "./PostPreview.jsx";

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
			<div className="main-page-content">
				<div>
					<h2>Feed</h2>
					<div className="blog-Post-Stream">
						{posts.map((post, index) => (
							/*PostPreview here to represent what
					we may want to show on the main page...*/
							<PostPreview postData={post} key={index} />
						))}
					</div>
				</div>
				<PostWriter uploadPost={uploadPost} user={user} />
			</div>
		</>
	);
};

export default MainPage;
