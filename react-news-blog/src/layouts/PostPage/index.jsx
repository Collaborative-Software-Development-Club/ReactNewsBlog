import React from 'react'
import { useParams } from 'react-router-dom'

import BlogPost from '../../components/BlogPost'
import CommentWriter from '../PostPage/CommentWriter'
import usePost from '../../data/usePost.js'
import useUserData from '../../data/useUserData.js'
import Comment from '../PostPage/Comment'

const PostPage = () => {
    console.log('post page')
    const { id } = useParams()
    const postData = usePost(id)
    console.log('postData', postData)
    const user = useUserData()

    return (
        <div className="main-page-content">
            <div>
                {postData && <BlogPost postData={postData} />}
                {postData && <CommentWriter user={user} postId={id} />}
            </div>
            <div>
                <h2>Comments:</h2>
                {postData && (
                    <ul className="scroll-feed">
                        {postData.comments.map((comment) => (
                            <Comment commentData={comment} postId={id}/>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}

export default PostPage
