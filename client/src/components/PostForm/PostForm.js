import React, { useState } from 'react'
import './PostForm.css'
import Axios from 'axios'

const PostForm = (props) => {

  const initInputs = { postTitle: props.postTitle || "", postImage: props.postImage || "", postContent: props.postContent || "" }
  const [inputs, setInputs] = useState(initInputs)

  const [postTitle, setPostTitle] = useState("")
  const [postImage, setPostImage] = useState("")
  const [postContent, setPostContent] = useState("")

  const addToList = () => {
    Axios.post('http://localhost:3001/insert', { postTitle: postTitle, postImage: postImage, postContent: postContent })
  }

  const handleSubmit = () => {
      props.submit(inputs, props.id)
      setInputs(initInputs)
  }

  return (
    <div>
      <form className="post-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          onChange={(event) => { setPostTitle(event.target.value) }} />
        <input
          type="text"
          placeholder="Image"
          onChange={(event) => { setPostImage(event.target.value) }} />
        <input
          type="text"
          placeholder="Post"
          onChange={(event) => { setPostContent(event.target.value) }} />
        <button className="post-button" onClick={addToList}>Post</button>
      </form>
    </div>
  )
}

export default PostForm