// src/Components/AdminLogin.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Fetch admin credentials from the JSON file (adjust path as needed)
      const response = await fetch('/path/to/db.json');
      const data = await response.json();

      // Check if the admin exists with the provided username and password
      const admin = data.admins.find(
        (admin) => admin.username === username && admin.password === password
      );

      if (admin) {
        // Store authentication state in localStorage
        localStorage.setItem('adminAuthenticated', 'true');
        
        // Redirect to the admin dashboard
        navigate('/admindashboard');
      } else {
        setError('Invalid username or password');
      }
    } catch (err) {
      console.error('Error fetching admin credentials:', err);
      setError('An error occurred during login. Please try again later.');
    }
  };

  return (
    <div className="admin-login-container">
      <div className="login-form">
        <h2>Admin Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="Enter Username"
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter Password"
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;