import React, { useState, useEffect } from 'react'
import './Posts.css'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SendIcon from '@mui/icons-material/Send';
import Axios from 'axios'
import Comments from '../Comments/Comments'

const Posts = (props) => {

  const { postTitle, postImage, postContent } = props
  const [editToggle, setEditToggle] = useState(false)

  const initInputs = { postComment: props.postComment || "" }
  const [inputs, setInputs] = useState(initInputs)

  const [postComment, setPostComment] = useState('')
  const [commentList, setCommentList] = useState([])

  const getComments = () => {
    Axios.get('http://localhost:3001/read/comments')
      .then(res => setCommentList(res.data))
      .catch(err => console.log(err))
  }

  const addComment = () => {
    Axios.post('http://localhost:3001/insert/:id', { postComment: postComment})
  }

  const handleSubmit = () => {
    props.submit(inputs, props._id)
    setInputs(initInputs)
    console.log(inputs)
  }

  useEffect(() => {
    getComments()
  }, [])
 
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
            <FavoriteBorderIcon className="like-icon" style={{ color: "white", fontSize: 30 }} onClick={() => {}} />
          </div>
        </>
        :
        <>
          <div className="comment-wrapper">
            {commentList.map(comment => <Comments {...comment} key={props.id} />)}
          </div>
          <form className="comment-form" onSubmit={handleSubmit}>
            <textarea
              className="comment-input"
              onChange={(event) => {setPostComment(event.target.value)}}
              placeholder="Enter Comment"
              required={true}
            />
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