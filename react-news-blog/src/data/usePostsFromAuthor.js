import { useEffect, useState } from 'react'

const POSTS_ROUTE = 'http://localhost:4000/posts/author/'

function usePostsFromAuthor(author) {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        const getPosts = async () => {
            setPosts(await getPostsFromAuthorFromApi(author))
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

async function getPostsFromAuthorFromApi(author) {
    try {
        const response = await fetch(POSTS_ROUTE + author)
        const data = await response.json()
        return data
    } catch (e) {
        console.log(e)
        return []
    }
}

export default usePostsFromAuthor