import { useState } from 'react'
import data from './placeholder.json'

function useData() {
    const [posts, setPosts] = useState(data.posts)
    posts.sort((postA, postB) => new Date(postB.date) - new Date(postA.date))

    const uploadPost = (postData) => setPosts([...posts, postData])

    return {
        posts: posts,
        uploadPost: uploadPost,
    }
}

export default useData
