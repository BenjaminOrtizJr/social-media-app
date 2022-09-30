import React from 'react'
import './PostForm.css'

const PostForm = () => {
  return (
    <div>
      <form className="post-form">
        <input type="text" placeholder="Image" />
        <input type="text" placeholder="Title" />
        <input type="text" placeholder="Description"/>
        <button className="post-button">Post</button>
      </form>
    </div>
  )
}

export default PostForm