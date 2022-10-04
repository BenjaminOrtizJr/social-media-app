import React, { useState } from 'react'
import './Posts.css'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SendIcon from '@mui/icons-material/Send';
import Axios from 'axios';



const Posts = (props) => {


  const secondInputs = { postComment: props.postComment || "" }
  const [inputs, setInputs] = useState(secondInputs)

  const { postTitle, postImage, postContent, postComment } = props
  const [editToggle, setEditToggle] = useState(false)

  const [editPost, setEditPost] = useState('')

  const updateComment = (id) => {
    Axios.put("http://localhost:3001/update", {
      id: id, editPost: editPost
    })
  }

  const handleSubmit = () => {
    props.submit(inputs, props.id)
    setInputs(secondInputs)
  }
 
  return (
    <div className="post-wrapper">
      <div className="post-container">
        <div className="profile-container">
          <AccountCircleIcon className="profile-icon" style={{ color: "white", fontSize: 44 }} />
          <div className="inner-profile-container">
            <span className="profile-handle">Profile Name</span>
            <p className="handle-name">@ProfileName</p>
          </div>
        </div>
        <h3 className="post-title">{postTitle}</h3>
        <img className="post-image" src={postImage} alt="post" />
        <p className="post-content">{postContent}</p>
        <p className="post-comment">{postComment}</p>
      </div>
      {!editToggle ?
        <>
          <div className="icon-container">
            <ChatBubbleOutlineIcon className="comment-icon" style={{ color: "white", fontSize: 30 }} onClick={() => setEditToggle(prevToggle => !prevToggle)} />
            <FavoriteBorderIcon className="like-icon" style={{ color: "white", fontSize: 30 }} />
          </div>
        </>
        :
        <>
          <form className="comment-form" onSubmit={handleSubmit}>
              <textarea className="comment-input" type="text" placeholder="Comment" onChange={(event) => {
                setEditPost(event.target.value)
              }} />
              <span className="send-span"><SendIcon className="send-icon" style={{ color: "#1DA1F2", fontSize: 44 }} onClick={() => updateComment()} /></span>
            </form>
        </>
      }
    </div>
  )
}

export default Posts