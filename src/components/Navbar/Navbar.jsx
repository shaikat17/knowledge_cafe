import React from 'react'
import './Navbar.css'
import userImg from '../../assets/user.jpg'

const Navbar = () => {
  return (
    <nav className="header">
      <div className="header_title">
        <h1>KD Cafe</h1>
      </div>
      <div className="user_img">
        <img src={userImg} alt="userImg" />
      </div>
    </nav>
  );
}

export default Navbar