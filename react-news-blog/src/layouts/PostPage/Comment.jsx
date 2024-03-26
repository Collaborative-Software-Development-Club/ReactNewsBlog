import React from "react";
import LikeCount from "../MainPage/LikeCount"

const Comment = ({commentData}) => {
	return (
		<div className="comment">
			<h3 className = "Author">{commentData.author}</h3> 
			<p className="comment-Content">{commentData.content}</p>
			
            
            <p>Date: {new Date(commentData.date).toDateString()}</p>
			<LikeCount likeCount={commentData.likes}/>
		</div>
	);

};

export default Comment;
