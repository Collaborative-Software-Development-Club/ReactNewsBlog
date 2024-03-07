import { useState } from "react";
import data from "./placeholder.json";

function useData() {
	console.log(data);
	const [posts, setPosts] = useState(data.posts);
    posts.sort((postA, postB) => new Date(postB.date) - new Date(postA.date))
	return { posts: posts, user: data.user, 
		uploadPost: (postData) => setPosts([...posts, postData]) };
	
}

export default useData;
