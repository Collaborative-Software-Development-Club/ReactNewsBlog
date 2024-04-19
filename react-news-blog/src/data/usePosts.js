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
    posts.sort(sortPosts)
    return posts
}

function sortPosts(postA, postB){
    if(postA.date && postB.date) {
        return new Date(postB.date) - new Date(postA.date)
    } else if(postA.date){
        return -1
    } else {
        return 1
    }
}

async function getPostsFromApi() {
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
