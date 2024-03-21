import React from "react";
import { useParams } from "react-router-dom";

import BlogPost from "../../components/BlogPost";
import CommentWriter from "../PostPage/CommentWriter";
import usePostData from "../../data/usePostData";
import useUserData from "../../data/useUserData.js"

const PostPage = ({comments, uploadComment}) => {
	const { id } = useParams();
	const postData = usePostData(id);
	const user = useUserData();

    if(!postData){
        return  <h1>Post not found</h1>
    }
	const postComments = comments.filter(comment => comment.post === id); //filter comments based on post ID
	
	return (
		<>
			<BlogPost postData={postData}/>
			<h2>Comments:</h2>
            <ul>Add comments here as list items</ul>
			{postComments.map((comment) => (comment.content))}
			<CommentWriter uploadComment={uploadComment} user = {user}/>
		</>
	);
};

export default PostPage;
