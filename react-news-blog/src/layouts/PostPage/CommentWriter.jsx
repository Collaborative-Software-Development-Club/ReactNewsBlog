import React, { useState } from 'react'
import uploadComment from '../../data/uploadComment'

const COMMENT_LIMIT = 100

const CommentWriter = ({ user, postId }) => {
    const [comment, setComment] = useState('')
    const commentLength = comment.length 

    const handleSubmit = (event) => {
        event.preventDefault()
        uploadComment(user.name, comment, postId)
        setComment("")
    }

    const commentIsTooLong = commentLength > COMMENT_LIMIT
    const commentIsEmpty = commentLength === 0
    const commentIsValid = !commentIsTooLong && !commentIsEmpty

    return (
        <div>
            <form onSubmit={handleSubmit} className="writer-form">
                <p>Commenting as {user.name}</p>
                <label htmlFor="content">Content:</label>
                <textarea name="content" value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
                {commentIsTooLong && (
                <p className="error">The comment must be no longer than {COMMENT_LIMIT} characters.</p>
                )}
                {commentIsEmpty && <p className="error">Comment can't be empty.</p>}
                <input type="submit" value="submit" disabled={!commentIsValid}></input>
            </form>
        </div>
    )
}

export default CommentWriter
