import React from 'react';
import './Header.css'; // Import the specific CSS file for Header
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>College Event Management</h1>
      <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/colleges">Colleges</Link></li>
        <li><Link to="/events">Events</Link></li>
        

        <li><Link to="/studentregistration">StudentRegistration</Link></li>
       
        <li><Link to="/contactus">ContactUs</Link></li>
        
       <li><Link to="/login" className="nav-login">Login</Link></li>
      

      </ul>
    </nav>
    </header>
  );
}

export default Header;
