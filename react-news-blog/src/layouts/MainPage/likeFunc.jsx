import React, { useState } from "react";

const UpdateLikeC = ({prevLikes}) => {
    console.log(prevLikes)
	//initialize my user modifiable variable with likeC!
    //let [likeNum, setLikes ] = useState(prevLikes);
    const [isLiked, setLikes] = useState(false)
    //this updates the setLikes varible by 1.
	const likeIt = () => {
        //update the original likeNum to setLikes.
        setLikes((prev) => !prev);
    }

    //update the actual like button...
    return (
        <div>
            <button className="like-Button" onClick={likeIt}>Like</button> 
            <p className="likes">{isLiked ? prevLikes + 1: prevLikes}</p>
        </div>
    );

};

export default UpdateLikeC;
