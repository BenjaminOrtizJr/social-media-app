import React, { useState } from 'react'
import './PostForm.css'
// import Axios from 'axios'
import AddCircleIcon from '@mui/icons-material/AddCircle'

const PostForm = (props) => {

  const initInputs = { postTitle: props.postTitle || "", postImage: props.postImage || "", postContent: props.postContent || "", postComment: props.postComment || "" }

  const [inputs, setInputs] = useState(initInputs)

  // const [postTitle, setPostTitle] = useState("")
  // const [postImage, setPostImage] = useState("")
  // const [postContent, setPostContent] = useState("")
  // const [postComment, setPostComment] = useState("")

  const [editToggle, setEditToggle] = useState(false)
                                     
  // const addToList = () => {
  //   Axios.post('http://localhost:3001/insert', { postTitle: postTitle, postImage: postImage, postContent: postContent, postComment: postComment })
  // }

  const handleChange = (e) => {
    const { name, value } = e.target
    setInputs(prevInputs => ({ ...prevInputs, [name]: value }))
  }
  const handleSubmit = () => {
      props.submit(inputs, props._id)
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
              <textarea
                className="title-input"
                rows="3"
                placeholder="Title:"
                onChange={handleChange} />
              <textarea
                className="image-input"
                rows="3"
                placeholder="Image URL:"
                onChange={handleChange} />
              <textarea
                rows="30"
                className="description-input"
                type="text"
                placeholder="Description:"
                onChange={handleChange} /> 
              <input className="comments-input1" type="text" onChange={handleChange} />
              <div className="post-button-container">
                <button className="post-button">Post</button>
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