import React, { useState } from 'react'
import './Posts.css'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SendIcon from '@mui/icons-material/Send';

const Posts = (props) => {

  const { postTitle, postImage, postContent, postComment } = props
  const [editToggle, setEditToggle] = useState(false)
 
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
          <p className="post-comment">{postComment}</p>
          <form className="comment-form" >
              <textarea className="comment-input" type="text" placeholder="Comment" />
            <span className="send-span"><SendIcon className="send-icon" style={{ color: "#1DA1F2", fontSize: 44 }} /></span>
          </form>
        </>
      }
    </div>
  )
}

export default Posts