import React from 'react'

import PostPreview from '../../components/PostPreview'

import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import usePostsFromAuthor from '../../data/usePostsFromAuthor'

const AuthorPage = () => {
    const { author } = useParams()
    const posts = usePostsFromAuthor(author)

    return (
        <>
            <h1>{author}</h1>
            <h2>Posts</h2>
            {posts.length === 0 ? (
                <p>No Post Found</p>
            ) : (
                <ul className='blog-Post-Stream'>
                    {posts.map((post) => (
                        <li>
                            <Link to={`../post/${post._id}`}>
                                <PostPreview postData={post} key={post._id} />
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </>
    )
}

export default AuthorPage

function parseURL(url) {
    return url.replace('%20', ' ')
}
