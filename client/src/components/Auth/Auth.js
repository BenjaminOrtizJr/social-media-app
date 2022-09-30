import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Auth.css'

class Auth extends Component {
  constructor() {
    super()
    this.state = {
      userName: "",
      password: ""
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className="login-page">
        <div className="logo-image">
          <img className="logo" src={require('../images/logo.png')} alt="logo"/>
        </div>
        <form className="login-form">
          <input
            className="user-input"
            type="text"
            name="userName"
            value={this.state.userName}
            placeholder="User Id"
            onChange={this.handleChange}
            required
          />
          <input
            className="user-input"
            type="password"
            name="password"
            value={this.state.password}
            placeholder="Password"
            onChange={this.handleChange}
            required
          />
          <Link to="home"><button className="login-button">Login</button></Link>
          <Link className="sign-up-link" to="#">Sign Up</Link>
        </form>
      </div>
    )
  }
}

export default Auth