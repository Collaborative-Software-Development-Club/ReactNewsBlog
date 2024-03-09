import React from "react";
import { useParams } from "react-router-dom";

import BlogPost from "../../components/BlogPost";

import usePostData from "../../data/usePostData";
import useComments from "../../data/useComments";

const PostPage = () => {
	const { id } = useParams();
	const postData = usePostData(id);
    const comments = useComments(id)
	return (
		<>
			<BlogPost postData={postData} />
            <h2>Comments:</h2>
            <ul>Add comments here as list items</ul>
		</>
	);
};

export default PostPage;
