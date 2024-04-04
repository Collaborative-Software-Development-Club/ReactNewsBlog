import React from 'react'
import AuthorTag from './AuthorTag'
import { Link } from 'react-router-dom'


/*
BlogPostMain used to post all posts on the main page, I think here we should
only be showing the title and the first sentence or two of each post...*/
const BlogPostMain = ({ postData }) => {
    const contentSummary = postData.content.substring(0, 30)
    return (
        /*className changed from blog-Post to main-page-posts to show
		how the main page list of posts could be represented...*/
        <li className="post-preview">
            <Link to={`./post/${postData.id}`}>
                <h3>{postData.title}</h3>
            </Link>
            <p>{contentSummary}...</p>
            <AuthorTag author={postData.author} />
        </li>
    )
}

export default BlogPostMain
