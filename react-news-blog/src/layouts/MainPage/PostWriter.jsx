import React, { useRef } from 'react'

const PostWriter = ({ uploadPost, user }) => {
    const titleRef = useRef()
    const contentRef = useRef()

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

    return (
        <div>
            <h2>Write a post</h2>
            <form onSubmit={handleSubmit} className="post-creation-form">
                <p>Posting as {user.name}</p>
                <label htmlFor='title'>Title</label>
                <input type='text' name='title' ref={titleRef} />
                <label htmlFor='content'>Content:</label>
                <textarea ref={contentRef} name='content'></textarea>
                <input type='submit' value='submit'></input>
            </form>
        </div>
    )
}

export default PostWriter

function getCurrentISODate() {
    return new Date().toISOString()
}
