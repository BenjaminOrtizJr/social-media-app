import React, { useState } from 'react'
import './PostForm.css'
import Axios from 'axios'
import AddCircleIcon from '@mui/icons-material/AddCircle'

const PostForm = (props) => {

  const initInputs = { postTitle: props.postTitle || "", postImage: props.postImage || "", postContent: props.postContent || "" }
  const [inputs, setInputs] = useState(initInputs)

  const [postTitle, setPostTitle] = useState("")
  const [postImage, setPostImage] = useState("")
  const [postContent, setPostContent] = useState("")

  const [editToggle, setEditToggle] = useState(false)
                                     
  const addToList = () => {
    Axios.post('http://localhost:3001/insert', { postTitle: postTitle, postImage: postImage, postContent: postContent })
  }

  const handleSubmit = () => {
      props.submit(inputs, props.id)
      setInputs(initInputs)
  }

  return (
    <div>
      {!editToggle ?
        <>
          <AddCircleIcon className="add-icon" style={{ color: "#1DA1F2", fontSize: 60 }} onClick={() => setEditToggle(prevToggle => !prevToggle)} />
        </>
        :
        <>
          <div className="post-form-wrapper">
            <form className="post-form" onSubmit={handleSubmit}>
              <input
                className="title-input"
                type="text"
                placeholder="Title:"
                onChange={(event) => { setPostTitle(event.target.value) }} />
              <input
                className="image-input"
                type="text"
                placeholder="Image URL:"
                onChange={(event) => { setPostImage(event.target.value) }} />
              <input
                className="description-input"
                type="text"
                placeholder="Description:"
                onChange={(event) => { setPostContent(event.target.value) }} />
              <div className="post-button-container">
                <button className="post-button" onClick={addToList}>Post</button>
                <button className="cancel-button" onClick={() => setEditToggle(prevToggle => !prevToggle)}>Cancel</button>
              </div>
            </form>
          </div>
        </>                                            
      }
    </div>
  )
}

export default PostForm