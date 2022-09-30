import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Nav = () => {

  return (
    <nav className="nav__bar-container">
      <div className="topnav">
        <Link to="#" className="active"><img className="logo-home" src={require('../images/logo.png')} alt="logo"/></Link>
      <div className="myLinks">
        <ul className="nav__bar-links">
            <li><Link className="links" to="profile"><AccountCircleIcon style={{ fontSize: 28, color: "#DCF8FF"}} /></Link></li>
        </ul>
      </div>
      </div>
    </nav>

  )
}

export default Nav