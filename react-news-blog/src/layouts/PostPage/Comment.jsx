import React from 'react'
import LikeCount from '../MainPage/LikeCount'
import likeComment from '../../data/likeComment'
import useUserData from '../../data/useUserData'

const Comment = ({ commentData, postId }) => {
    const user = useUserData()
    const updateLike = () => likeComment(postId, user.name, commentData.content)
    return (
        <li className='comment'>
            <h3 className='Author'>{commentData.author}</h3>
            <p className='comment-Content'>{commentData.content}</p>
            <p>Date: {new Date(commentData.date).toDateString()}</p>
            <LikeCount likedBy={commentData.likedBy} updateLike={updateLike}/>
        </li>
    )
}

export default Comment
