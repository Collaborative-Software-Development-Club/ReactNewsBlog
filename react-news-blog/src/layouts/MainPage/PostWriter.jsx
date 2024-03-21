import React, { useRef } from 'react'
import { useState } from 'react'

const PostWriter = ({ uploadPost, user }) => {
    const titleRef = useRef()
    const contentRef = useRef()

    //set the titleCharCount to be set to the current length of the title to start with.
    const[title, setTitle] = useState("");

    const createPostData = (title, content) => {
        return {
            author: user.name,
            title: title,
            content: content,
            date: getCurrentISODate(),
            likes: 0,
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        uploadPost(createPostData(titleRef.current.value, contentRef.current.value))
        
    }


    //create a boolean for the limit of characters then use attribute disabled on the submit button when
    //we do not have an appropriate character count!
    let titleIsValid = title.length > 0 && title.length <= 30;
    

    return (
        <div>
            <h2>Write a post</h2>
            <form onSubmit={handleSubmit} className="post-creation-form">
                <p>Posting as {user.name}</p>
                <label htmlFor='title'>Title</label>
                <input type='text' name='title' ref={titleRef} 
                     onChange={(e) => setTitle(e.target.value)}/>
                <label>Title char count: {title.length}</label>
                <label htmlFor='content'>Content:</label>
                <textarea ref={contentRef} name='content'></textarea>
                <input type='submit' value='submit' disabled = {!titleIsValid}></input>
                {
                    titleIsValid || <p>The title must be under 31 characters and greater than 0.</p> 
                }
                
            </form>
        </div>
    )
}

export default PostWriter

function getCurrentISODate() {
    return new Date().toISOString()
}
