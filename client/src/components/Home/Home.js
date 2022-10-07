import React, { useState, useEffect } from 'react'
import Nav from '../Nav/Nav'
import PostForm from '../PostForm/PostForm'
import Posts from '../Posts/Posts'
import Axios from 'axios'

const Home = () => {
  const [postList, setPostList] = useState([])
  const [newComment, setNewComment] = useState("")

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

  const editPost = (id) => {
    Axios.put('http://localhost:3001/update', { id: id, newComment: newComment })
      .then(res => {
        setNewComment(prevPosts => prevPosts.map(post => post._id !== id ? post : res.data))
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
      <div>
      <Nav />
      <PostForm submit={addPost} />
      {postList.map(post => <Posts {...post} key={post._id} editPost={editPost} />)}
      
    </div>
  )
}

export default Home