// src/Components/AdminLogin.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Replace with your actual authentication logic
            const response = await axios.post('http://localhost:5002/admin/login', { email, password });

            if (response.data.success) {
                navigate('/admin/dashboard'); // Redirect to dashboard on success
            } else {
                alert('Login failed: ' + response.data.message);
            }
        } catch (error) {
            alert('Login failed: ' + error.response?.data?.message || error.message);
        }
    };

    return (
        <div className="auth-container">
            <h2>Admin Login</h2>
            <form onSubmit={handleSubmit}>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Log In</button>
            </form>
        </div>
    );
};

export default AdminLogin;
