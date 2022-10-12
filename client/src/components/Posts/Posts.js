import React, { useState, useEffect } from 'react'
import './Posts.css'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SendIcon from '@mui/icons-material/Send';
import Axios from 'axios'

const Posts = (props) => {

  const { postTitle, postImage, postContent } = props
  const [editToggle, setEditToggle] = useState(false)

  const initInputs = { postComment: props.postComment || ""  }

  const [postComment, setPostComment] = useState('')

  const [inputs, setInputs] = useState(initInputs)

  useEffect(() => {
    Axios.get('http://localhost:3001/read').then((response) => {
      setPostComment(response.data)
    })
  }, [])

   const addComment = (newComment) => {
     Axios.post('http://localhost:3001/insert/comment', newComment)
       .then(res => setPostComment(prevComments => [...prevComments, res.data]))
        .catch(err => console.log(err))
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setInputs(prevInputs => ({ ...prevInputs, [name]: value }))
  }

  const handleSubmit = () => {
      props.submit(inputs, props._id)
      setInputs(initInputs)
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
          
          <p className="post-comment"></p>

          <form className="comment-form" onSubmit={handleSubmit}>
            
            <textarea
              className="comment-input"
              name="postComment"
              value={inputs.postComment}
              onChange={handleChange}
              placeholder="Comment" />
            
            <span className="send-span">
             <button className="send-icon-button" onClick={addComment}><SendIcon style={{fontSize: 46, color: "#1DA1F2"}}/></button>
            </span>
          </form>
        </>
      }
    </div>
  )
}

export default Posts