import React from 'react'

import PostPreview from '../../components/PostPreview'

import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const AuthorPage = ({ posts, uploadPost }) => {
    const { author } = useParams()
    const parsedAuthor = parseURL(author)
    const filteredPosts = posts.filter((postData) => postData.author === parsedAuthor)

    return (
        <>
            <h1>{author}</h1>
            <h2>Posts</h2>
            {filteredPosts.length === 0 ? (
                <p>No Post Found</p>
            ) : (
                <ul className='blog-Post-Stream'>
                    {filteredPosts.map((post) => (
                        <li>
                            <Link to={`/post/${post.id}`}>
                                <PostPreview postData={post} key={post.id} />
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
