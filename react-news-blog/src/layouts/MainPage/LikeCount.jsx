import React, { useState } from 'react'
import toggleLike from "../../data/toggleLike"

const LikeCount = ({ likes, user, id }) => {

    return (
        <div className='like-counter'>
            <button className='like-Button' onClick={() => toggleLike(id, user)}>
                {false ? 'unlike' : 'like'}
            </button>
            <p className='likes'>{likes}</p>
        </div>
    )
}

export default LikeCount
