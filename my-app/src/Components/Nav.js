// Nav.js
import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/about">Events</Link></li>
        <li><Link to="/about">Student Registration</Link></li>
        <li><Link to="/about">Login</Link></li>
        <li><Link to="/about">Contact Us</Link></li>
      

      </ul>
    </nav>
  );
}

export default Nav;
