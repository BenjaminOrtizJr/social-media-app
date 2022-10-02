import React, {useState} from 'react'
import './Posts.css'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const Posts = (props) => {

  const initInputs = { comment: props.comment || "" }

  const { postTitle, postImage, postContent } = props
  const [editToggle, setEditToggle] = useState(false)
 
  const [inputs, setInputs] = useState(initInputs)

  const [comment, setComment] = useState("")

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
          <form>
            <div className="comments">
              {/* <CommentList /> */}
            </div>
            <input className="comment-input" type="text" placeholder="Comment" />
          </form>
        </>
      }
    </div>
  )
}

export default Posts