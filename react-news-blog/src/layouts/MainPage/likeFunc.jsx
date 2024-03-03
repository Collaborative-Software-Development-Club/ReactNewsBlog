import React, { useState } from "react";

const UpdateLikeC = ({ likeC }) => {
	//initialize my user modifiable variable with likeC!
    let [likeNum, setLikes ] = useState(likeC);

    //this updates the setLikes varible by 1.
	const likeIt = () => {
        //update the original likeNum to setLikes.
        setLikes(likeNum + 1);
    }

};

export default UpdateLikeC;
