import React from 'react'

//Create the structure of the blog post
const Post = ({ title, content }) => {
  return (
    <div className = "blog-Post">
      
      <h1 className = "blog-Post-Title" >{title}</h1>
      <p className = "blog-Post-Content">{content}</p>
      <button className = "like-Button"> Like </button>
    </div>
  );
}

//pass in the content of the blog post with props
function CreateBlogPost({title, content}){
  return(
    <div className = "blog-Post-Stream">
      <Post title = {title} content = {content}/>
    </div>
  );
}

export default CreateBlogPost