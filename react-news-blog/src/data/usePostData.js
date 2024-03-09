import data from "./placeholder.json";

function usePostData(id){
    const posts = data.posts
    const filteredPosts = posts.filter((postData) => postData.id === id)
    if(filteredPosts.length === 0){
        return undefined
    } else {
        return filteredPosts[0]
    }
}

export default usePostData