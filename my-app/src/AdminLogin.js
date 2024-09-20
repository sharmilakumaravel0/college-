import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./AdminLogin.css"

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/admin/login', { email, password });
      if (response.data.success) {
        localStorage.setItem('adminToken', response.data.token); // Store token for authentication
        
      } else {
        alert(response.data.message || 'Login Failed');
      }
    } catch (error) {
      console.error('Login Error:', error);
      alert('Error logging in');
    }
  };

  return (
    <>
    <div className='a'>
    <div className="login-container">
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
    </div>
    </>
  );
};

export default AdminLogin;
