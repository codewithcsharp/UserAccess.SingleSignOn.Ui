import React from 'react';
import '../css/Navbar.css';
import userIcon from '../css/Icons/user-regular.svg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <button className="menu-button">
          <span className="menu-icon">&#x2630;</span>
        </button>
        <div className="logo">USER-LOGO</div>
      </div>

      <ul className="navbar-menu">
        <li className="navbar-item">Services</li>
        <li className="navbar-item">Industries</li>
        <li className="navbar-item">Insights</li>
        <li className="navbar-item">About</li>
        <li className="navbar-item">Careers</li>
      </ul>

      <div className="navbar-right">
        <button className="register-button">Register</button>
        <button className="login-button">Login</button>
        <div className="user-login">
          <img
            src = {userIcon} // Replace this with the user login logo URL or local image path.
            alt="User Login"
            className="user-login-icon"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
