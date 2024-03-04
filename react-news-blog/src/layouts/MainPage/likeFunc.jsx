import React, { useState } from "react";

const UpdateLikeC = () => {
	//initialize my user modifiable variable with likeC!
    let [likeNum, setLikes ] = useState(0);

    //this updates the setLikes varible by 1.
	const likeIt = () => {
        //update the original likeNum to setLikes.
        setLikes(likeNum + 1);
    }
    //update the actual like button...
    return (
        <div>
            <button className="like-Button" onClick={likeIt}>Like</button> 
            <p className="likes">{likeNum}</p>
        </div>
    );

};

export default UpdateLikeC;
