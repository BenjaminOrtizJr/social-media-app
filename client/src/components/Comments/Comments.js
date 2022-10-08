import React from 'react'
import './Comments.css'

const Comments = (props) => {
  const { postComment } = props

  return (
      <div className="comment-container">
          <p className="comment-content">{postComment}</p>
      </div>
  )
}
// Test Commit From Ubuntu OS
export default Comments