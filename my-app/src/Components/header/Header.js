import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import eventsphere_logo from '../Assets/eventsphere_logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close menu on link click
  };

  return (
    <header className='v'>
      <div className="logo-link" onClick={toggleMenu}>
        <div className="logo">
          <img 
            src={eventsphere_logo} 
            alt="College Event Management Logo" 
            className="logo-image"
          />
        </div>
      </div>
      <div className="header-title">
        <h1 className='pp'>EventSphere</h1>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/colleges">Colleges</Link></li>
          <li><Link to="/signup">Signup</Link></li>
          <li><Link to="/contactus">Contact Us</Link></li>
          <li><Link to="/login" className="nav-login">Login</Link></li>
        </ul>
      </nav>
      {isMenuOpen && (
        <div className="side-menu">
          <ul>
            <li><Link to="/adminlogin" onClick={handleLinkClick}>AdminLogin</Link></li>
            <li><Link to="/admin/dashboard" onClick={handleLinkClick}>AdminDashboard</Link></li>
          </ul>
        </div>
      )}
      {isMenuOpen && <div className="overlay" onClick={toggleMenu}></div>} {/* Overlay to close menu */}
    </header>
  );
};

export default Header;
