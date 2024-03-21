import React from 'react'
import PostPreview from '../../components/PostPreview'

import useUserData from '../../data/useUserData.js'

import {useParams} from 'react-router-dom'

import { Link } from 'react-router-dom'

const AuthorPage = ({ posts, uploadPost }) => {
    const user = useUserData()
    const { author } = useParams()

    console.log('main page', posts)

	const filteredPosts = posts.filter((postData) => postData.author === author)

	
        return (
			<>
			
				<h1>{author}</h1>

				{filteredPosts.length === 0 ? <h1>No Post Found</h1> : 
	
				<div>
					<ul className='blog-Post-Stream'>
						{filteredPosts.map((post) => (
							<li>
								<Link to={`./post/${post.author}`}>
									<PostPreview postData={post} key={post.id} />
								</Link>
							</li>
						))}
					</ul>
				</div>
}
			</>
		)
    

    
}

export default AuthorPage
