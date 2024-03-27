import { useState } from 'react'
import data from './placeholder.json'

function useData() {
    const [posts, setPosts] = useState(data.posts)
    const [comments, setComments] = useState(data.comments)

    posts.sort((postA, postB) => new Date(postB.date) - new Date(postA.date))
    comments.sort((commentA, commentB) => new Date(commentA.date) - new Date(commentB.date))


    const uploadPost = (postData) => setPosts([...posts, postData])
    const uploadComment = (commentData) => {
        console.log("uploading comment")
        console.log(commentData)
        setComments([...comments, commentData])
    }

    return {
        posts: posts,
        uploadPost: uploadPost,
        comments: comments,
        uploadComment: uploadComment,
    }

}

export default useData
