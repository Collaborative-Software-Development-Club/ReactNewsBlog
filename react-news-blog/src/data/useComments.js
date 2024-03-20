import data from './placeholder.json'

function useComments(postId) {
    const comments = data.comments.filter((commentData) => commentData.post === postId)
    comments.sort((commentA, commentB) => new Date(commentA.date) - new Date(commentB.date))
    return comments
}

export default useComments
