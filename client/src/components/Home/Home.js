import React, { useState, useEffect } from 'react'
import Nav from '../Nav/Nav'
import PostForm from '../PostForm/PostForm'
import PostList from '../PostList/PostList'

import Axios from 'axios'

const Home = () => {
  const [postList, setPostList] = useState([])

  useEffect(() => {
    Axios.get('http://localhost:3001/read').then((response) => {
      setPostList(response.data)
    })
  }, [])
  
  return (
      <div>
      <Nav />
      <PostForm />
      <PostList posts={postList} />
      
    </div>
  )
}

export default Home