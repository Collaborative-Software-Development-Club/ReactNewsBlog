import React from 'react'
import PostWriter from './PostWriter.jsx'
import PostPreview from '../../components/PostPreview.jsx'

import useUserData from '../../data/useUserData.js'
import usePosts from '../../data/usePosts.js'

const MainPage = () => {
    const user = useUserData()

    const posts = usePosts();
    console.log(posts)
    posts.forEach(post => console.log(post))

    return (
        <>
            <h1>CSDC Blog</h1>
            <div className="main-page-content">
                <div>
                    <h2>Feed</h2>
                    <ul className="scroll-feed">
                        {posts.map((post) => (
                            <PostPreview postData={post} key={post._id} />
                        ))}
                    </ul>
                </div>
                <PostWriter user={user} />
            </div>
        </>
    )
}

export default MainPage
