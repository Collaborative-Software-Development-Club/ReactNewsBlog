import React from "react";
import LikeCount from "../layouts/MainPage/LikeCount";
import AuthorTag from "./AuthorTag";
import likePost from '../data/likePost'
import useUserData from "../data/useUserData";

const BlogPost = ({postData}) => {
   const user = useUserData() 
    const updateLike = () => likePost(postData._id, user.name)
	return (
		<div className="blog-Post">	
			<h3 className="blog-Post-Title">{postData ? postData.title : "Loading"}</h3>
			<p className="blog-Post-Content">{postData ? postData.content : "Loading"}</p>
            <AuthorTag author={postData ? postData.author : "Loading"}/>
			<LikeCount likedBy={postData ? postData.likedBy : "Loading"} updateLike={updateLike}/>
            <p>Date: {postData && new Date(postData.date).toDateString()}</p>
		</div>
	);

};

export default BlogPost;
