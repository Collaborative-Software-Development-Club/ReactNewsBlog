import data from "./placeholder.json";

function useData(id) {
    const comments = data.comments.filter(commentData => commentData.id === id)
	comments.sort((commentA, commentB) => new Date(commentA.date) - new Date(commentB.date));
	return comments
}

export default useData;
