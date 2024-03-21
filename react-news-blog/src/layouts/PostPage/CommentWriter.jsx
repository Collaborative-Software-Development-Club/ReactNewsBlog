import React, { useRef } from 'react'


const CommentWriter = ({user, uploadComment}) => {
    const contentRef = useRef()

    const createCommentData = (title, content) => {
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
        uploadComment(createCommentData(contentRef.current.value))
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="comment-creation-form">
                <h1>Commenting as {user.name}</h1>
                <label htmlFor='content'>Content:</label>
                <textarea ref={contentRef} name='content'></textarea>
                <input type='submit' value='submit'></input>
            </form>
        </div>
    )
}

export default CommentWriter

function getCurrentISODate() {
    return new Date().toISOString()
}
