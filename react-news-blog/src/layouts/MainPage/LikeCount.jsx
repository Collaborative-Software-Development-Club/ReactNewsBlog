import React, { useState } from 'react'

const LikeCount = ({ likeCount }) => {
    console.log(likeCount)
    const [isLiked, setLikes] = useState(false)

    const toggleLike = () => {
        setLikes((prev) => !prev)
    }

    return (
        <div className='like-counter'>
            <button className='like-Button' onClick={toggleLike}>
                {isLiked ? 'unlike' : 'like'}
            </button>
            <p className='likes'>{isLiked ? likeCount + 1 : likeCount}</p>
        </div>
    )
}

export default LikeCount
