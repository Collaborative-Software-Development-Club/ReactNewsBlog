import React from 'react'
import { useParams } from 'react-router-dom'

import BlogPost from '../../components/BlogPost'
import CommentWriter from '../PostPage/CommentWriter'
import usePostData from '../../data/usePostData'
import useUserData from '../../data/useUserData.js'
import Comment from '../PostPage/Comment'

const PostPage = ({ comments, uploadComment }) => {
    const { id } = useParams()
    const postData = usePostData(id)
    const user = useUserData()

    if (!postData) {
        return <h1>Post not found</h1>
    }
    //filter comments based on post ID, .filter returns true or false for each
    const postComments = comments.filter((comment) => comment.post === id)

    return (
        <div className="main-page-content">
            <div>
                <BlogPost postData={postData} />
                <CommentWriter uploadComment={uploadComment} user={user} postId={postData.id} />
            </div>
            <div>
                <h2>Comments:</h2>
                <ul className="scroll-feed">
                    {postComments.map((comment) => (
                        <Comment commentData={comment} key={postData.id} />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default PostPage
