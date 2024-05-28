import { useEffect, useState } from 'react'

const POST_ROUTE = 'http://localhost:4000/posts/'

function usePost(id){
    console.log("fetching post " + id)
    const [post, setPost] = useState(null)
    useEffect(() => {
        const getPost = async () => {
            setPost(await getPostFromApi(id))
        }
        getPost()
    }, [])
    return post
}

async function getPostFromApi(id) {
    console.log("getting posts from api")
    try {
        const response = await fetch(POST_ROUTE + id)
        const data = await response.json()
        return data
    } catch (e) {
        console.log(e)
        return null
    }
}

export default usePost