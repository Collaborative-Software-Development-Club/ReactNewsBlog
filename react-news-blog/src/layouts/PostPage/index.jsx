import React from 'react'
import { useParams } from 'react-router-dom'

import BlogPost from '../../components/BlogPost'
import CommentWriter from '../PostPage/CommentWriter'
import usePost from '../../data/usePost.js'
import useUserData from '../../data/useUserData.js'
import Comment from '../PostPage/Comment'

const PostPage = ({ comments, uploadComment }) => {
    const { id } = useParams()
    const postData = usePost(id)
    const user = useUserData()

    const postComments = comments.filter((comment) => comment.post === id)

    return (
        <div className="main-page-content">
            <div>
                <BlogPost postData={postData} />
                {postData && (
                    <CommentWriter uploadComment={uploadComment} user={user} postId={postData.id} />
                )}
            </div>
            <div>
                <h2>Comments:</h2>
                <ul className="scroll-feed">
                    {postComments.map((comment) => (
                        <Comment commentData={comment} />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default PostPage
