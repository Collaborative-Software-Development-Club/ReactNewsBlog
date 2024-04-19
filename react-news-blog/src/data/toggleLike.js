const LIKE_ROUTE = 'http://localhost:4000/like/'

async function toggleLike(id, liker) {
    try {
        const response = await fetch(LIKE_ROUTE+id, {
            method: 'PUT',
            headers: {
                "Accept": "application/json",
                "Content-type": "application/json",
              },
            body: JSON.stringify({liker: liker})
        })
        console.log(response)
        //const res = await response.json()
        //return res
    } catch (e) {
        console.log(e)
        return []
    }
}

export default toggleLike