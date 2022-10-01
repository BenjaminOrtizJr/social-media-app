import React from 'react'
import './Posts.css'
import EditIcon from '@mui/icons-material/Edit'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'

const Posts = (props) => {

  const { postTitle, postImage, postContent } = props

  // const [newPost, setNewPost] = useState("")

  return (
    <div className="post-container">
      <h3>{postTitle}</h3>
      <img src={postImage} alt="post" />
      <p>{postContent}</p>

      <EditIcon className="edit-icon" style={{ fontSize: 20}}/>
      <DeleteForeverIcon className="delete-icon" style={{ fontSize: 20 }}/>
    </div>
  )
}

export default Posts