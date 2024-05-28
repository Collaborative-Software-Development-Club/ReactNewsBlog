const LIKE_COMMENT_ROUTE = 'http://localhost:4000/like/comment/'

async function likeComment(postId, username, commentContent) {
    try {
        const response = await fetch(LIKE_COMMENT_ROUTE + postId, {
            method: 'PUT',
            headers: {
                "Accept": "application/json",
                "Content-type": "application/json",
              },
            body: JSON.stringify({
                username: username,
                content: commentContent
             })
        })
        const data = await response.json()
        return data
    } catch (e) {
        console.log(e)
        return null
    }
}

export default likeComment