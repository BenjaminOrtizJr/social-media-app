import React, { useState, useEffect } from 'react'
import Nav from '../Nav/Nav'
import PostForm from '../PostForm/PostForm'
import Posts from '../Posts/Posts'
import Axios from 'axios'

const Home = () => {
  const [postList, setPostList] = useState([])

  const getPosts = () => {
    Axios.get('http://localhost:3001/read')
      .then(res => setPostList(res.data))
      .catch(err => console.log(err))
  }
  const addPost = (newPost) => {
    Axios.post('http://localhost:3001/insert', newPost)
      .then(res => setPostList(prevPosts => [...prevPosts, res.data]))  
      .catch(err => console.log(err))
  }


  useEffect(() => {
    getPosts()
  }, [])

  return (
      <div>
      <Nav />
      <PostForm submit={addPost} />
      {postList.map(post => <Posts {...post} key={post._id} />)}
      
    </div>
  )
}

export default Home