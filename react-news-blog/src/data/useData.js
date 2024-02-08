import {useState, useEffect} from 'react'
import data from './placeholder.json'

function useData() {
    console.log(data)
    const [posts, setPosts] = useState(data.posts);

    const uploadPost = (postData) => {
        setPosts([...posts], postData)
    }

    return [posts, uploadPost]
}

export default useData