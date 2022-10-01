import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

const Footer = () => {
  return (
    <footer className="footer">
        <ul className="footer-links">
            <li><Link className="footer__link-icon" to="#"><HomeIcon style={{ fontSize: 24, color: "#DCF8FF" }}/></Link></li>
            <li><Link className="footer__link-icon" to="notifications"><NotificationsActiveIcon style={{ fontSize: 24, color: "#DCF8FF" }}/></Link></li>
            <li><Link className="footer__link-icon" to="feed"><DynamicFeedIcon style={{ fontSize: 24, color: "#DCF8FF" }}/></Link></li>
            <li><Link className="footer__link-icon" to="logout"><LogoutIcon style={{ fontSize: 24, color: "#DCF8FF" }}/></Link></li>
        </ul>
    </footer>
  )
}

export default Footer