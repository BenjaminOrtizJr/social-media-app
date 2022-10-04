import React from 'react'
import Posts from '../Posts/Posts'

const PostList = (props) => {

    const { posts } = props
    
  return (
      <div>
      {posts.map(post => <Posts {...post} key={post._id} />)}
      
    </div>
  )
}

export default PostList