import React, { useRef } from 'react'
import { useState } from 'react'
import uploadPost from '../../data/uploadPost'

const TITLE_LIMIT = 60

const PostWriter = ({ user }) => {
    const contentRef = useRef()

    //set the titleCharCount to be set to the current length of the title to start with.
    const [title, setTitle] = useState('')
    const titleLength = title.length

    const createPostData = (title, content) => {
        return {
            author: user.name,
            title: title,
            content: content,
            //date: getCurrentISODate(),
            //likes: 0,
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        uploadPost(createPostData(title, contentRef.current.value))
        resetContent()
    }

    const resetContent = () => {
        setTitle("")
        contentRef.current.value = ""
    }

    //create a boolean for the limit of characters then use attribute disabled on the submit button when
    const titleIsTooLong = titleLength > TITLE_LIMIT
    const titleIsEmpty = titleLength === 0
    const titleIsValid = !titleIsTooLong && !titleIsEmpty

    return (
        <form onSubmit={handleSubmit} className="writer-form">
            <h2>Write a post</h2>
            <p>Posting as {user.name}</p>
            <label htmlFor="title">Title</label>
            <input
                type="text"
                name="title"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />
            <p className={!titleIsValid && 'error'}>
                ({title.length}/{TITLE_LIMIT})
            </p>
            {titleIsTooLong && (
                <p className="error">The title must be no longer than {TITLE_LIMIT} characters.</p>
            )}
            {titleIsEmpty && <p className="error">Title can't be empty.</p>}
            <label htmlFor="content">Content:</label>
            <textarea ref={contentRef} name="content"></textarea>
            <input type="submit" value="submit" disabled={!titleIsValid}></input>
        </form>
    )
}

export default PostWriter
