import React from 'react'
import { Link } from 'react-router-dom'

const AuthorTag = ({author}) => {
  return (
    <Link to={"/authors/" + author}><p>{author}</p></Link>
  )
}

export default AuthorTag