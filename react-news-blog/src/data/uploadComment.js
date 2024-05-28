const COMMENT_ROUTE = 'http://localhost:4000/comment/'

/**
 * 
 * @param {string} author 
 * @param {string} content 
 * @param {string} id
 * @returns 
 */
async function uploadComment(author, content, id) {
    console.log("uploading", author, content)
    try {
        const response = await fetch(COMMENT_ROUTE + id, {
            method: 'PUT',
            headers: {
                "Accept": "application/json",
                "Content-type": "application/json",
              },
            body: JSON.stringify({
                content: content,
                author: author
            })
        })
        const data = await response.json()
        return data
    } catch (e) {
        console.log(e)
        return null
    }
}

export default uploadComment