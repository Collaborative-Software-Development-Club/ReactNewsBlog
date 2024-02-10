import React from 'react';

//a component that contains a template and logic for taking in input and makes a post!
//will be rendered to the DOM...


const Post = () => {
    return ( 

        <div className = "Post">

            <h7>Please enter your text below!</h7>
            <br/>
            <textArea size = "500" height = "300" />

        </div>

        
     );
}
 
export default Post;