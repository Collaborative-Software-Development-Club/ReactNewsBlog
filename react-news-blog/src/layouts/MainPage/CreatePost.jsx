import React from 'react'

//Create the structure of the blog post
const CreatePost = ({ title, content }) => {
  return (
    <div className = "blog-Post">
      <h2>{title}</h2>
      <div className = "blog-post-content">{content}</div>
    </div>
  );
}

//pass in the content of the blog post with props
function CreateBlogPost({title, content}){
  return(
    <div className = "blog-Post-Stream">
      <CreatePost title = {title} content = {content}/>
    </div>
  );
}

export default CreatePost