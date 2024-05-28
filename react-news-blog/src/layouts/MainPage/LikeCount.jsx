import React from 'react'
import useUserData from '../../data/useUserData'

const LikeCount = ({ likedBy, updateLike}) => {
    const user = useUserData()
    const likeCount = likedBy.length
    const isLiked = likedBy.includes(user.name)

    return (
        <div className='like-counter'>
            <button className='like-Button' onClick={updateLike}>
                {isLiked ? 'unlike' : 'like'}
            </button>
            <p className='likes'>{likeCount}</p>
        </div>
    )
}

export default LikeCount
