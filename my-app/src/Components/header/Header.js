import React from 'react';
import './Header.css'; // Import the specific CSS file for Header
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='v'>
      <Link to="/adminlogin" className="logo-link">
          <div className="logo">
            <img 
              src="https://i.pinimg.com/originals/29/4c/e0/294ce071f8296c4d4ca39af8267cc2b0.jpg" 
              alt="College Event Management Logo" 
              className="logo-image"
            />
            </div>
            </Link>
      <h1>College Event Management</h1>
      <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/colleges">Colleges</Link></li>
        
        

        <li><Link to="/signup">Signup</Link></li>
       
        <li><Link to="/contactus">ContactUs</Link></li>
        
       <li><Link to="/login" className="nav-login">Login</Link></li>
      

      </ul>
    </nav>
    </header>
  );
}

export default Header;
