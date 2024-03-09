import React from "react";
import { useParams } from "react-router-dom";

import BlogPost from "../../components/BlogPost";

import usePostData from "../../data/usePostData";

const PostPage = () => {
	const { id } = useParams();
	const postData = usePostData(id);
	return (
		<>
			<BlogPost postData={postData} />
            <h2>Comments:</h2>
            <ul><li>Add comments here</li></ul>
		</>
	);
};

export default PostPage;
