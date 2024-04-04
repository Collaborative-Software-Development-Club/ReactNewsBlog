import { useEffect, useState } from 'react'

const POSTS_ROUTE = 'http://localhost:4000/posts'

function usePosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        const getPosts = async () => {
            setPosts(await getPostsFromApi())
        }
        getPosts()
    }, [])
    return posts
}

async function getPostsFromApi() {
    //const url = 'https://jsonplaceholder.typicode.com/users
    try {
        const response = await fetch(POSTS_ROUTE)
        const data = await response.json()
        return data
    } catch (e) {
        console.log(e)
        return []
    }
}

export default usePosts
