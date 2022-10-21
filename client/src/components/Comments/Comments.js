import React from 'react'
import './Comments.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Comments = (props) => {
  const { postComment } = props

  return (
    <div className="comment-container">
        <div className="profile-container">
          <AccountCircleIcon className="profile-icon" style={{ color: "white", fontSize: 30 }} />
          <div className="inner-profile-container">
            <span className="profile-handle"><p className="comment-content">{postComment}</p></span>
          </div>
        </div>
      </div>
  )
}
// Test Commit From Ubuntu OS
export default Comments