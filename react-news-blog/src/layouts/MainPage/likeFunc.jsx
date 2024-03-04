import React, { useState } from "react";

const UpdateLikeC = ({ likeC }) => {
	//initialize my user modifiable variable with likeC!
    let [likeNum, setLikes ] = useState(likeC);

    //this updates the setLikes varible by 1.
	const likeIt = () => {
        //update the original likeNum to setLikes.
        setLikes(likeNum + 1);
    }

    //should I use a form so that when the button is clicked 
    //I update the like count. Though I'm not sure how to connect this to the 
    //actual post...
    <form>
        onClick={event =>{
            event.preventDefault();
            likeIt(0);
        }
        }
        
    </form>

};

export default UpdateLikeC;
