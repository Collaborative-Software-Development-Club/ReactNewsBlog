const LIKE_ROUTE = 'http://localhost:4000/like/'

async function likePost(postId, liker) {
    console.log('liking post from the front end')
    console.log("liker", liker)
    console.log("postId", postId)
    try {
        const response = await fetch(LIKE_ROUTE + postId, {
            method: 'PUT',
            headers: {
                "Accept": "application/json",
                "Content-type": "application/json",
              },
            body: JSON.stringify({liker})
        })
        const data = await response.json()
        return data
    } catch (e) {
        console.log(e)
        return null
    }
}

export default likePost