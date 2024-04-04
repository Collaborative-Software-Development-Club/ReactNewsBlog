const POSTS_ROUTE = 'http://localhost:4000/posts'

async function uploadPost(postData) {
    try {
        const response = await fetch(POSTS_ROUTE, {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-type": "application/json",
              },
            body: JSON.stringify(postData)
        })
        const data = await response.json()
        return data
    } catch (e) {
        console.log(e)
        return []
    }
}

export default uploadPost