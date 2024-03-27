import React, { useState } from 'react'

const COMMENT_LIMIT = 100

const CommentWriter = ({ user, uploadComment, postId }) => {
    const [comment, setComment] = useState('')
    const commentLength = comment.length

    const createCommentData = () => {
        return {
            author: user.name,
            content: comment,
            date: getCurrentISODate(),
            post: postId,
            likes: 0,
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        uploadComment(createCommentData())
    }

    const commentIsTooLong = commentLength > COMMENT_LIMIT
    const commentIsEmpty = commentLength === 0
    const commentIsValid = !commentIsTooLong && !commentIsEmpty

    return (
        <div>
            <form onSubmit={handleSubmit} className="comment-creation-form">
                <h1>Commenting as {user.name}</h1>
                <label htmlFor="content">Content:</label>
                <textarea name="content" value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
                {commentIsTooLong && (
                    <p className="error">The comment must no longer than {COMMENT_LIMIT} characters.</p>
                )}
                {commentIsEmpty && <p className="error">Comment can't be empty.</p>}
                <input type="submit" value="submit" disabled={!commentIsValid}></input>
            </form>
        </div>
    )
}

export default CommentWriter

function getCurrentISODate() {
    return new Date().toISOString()
}
